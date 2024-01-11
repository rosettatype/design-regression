// Basic Ploty layout to be extended for each type
var layout = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
        family: 'AdapterMonoVF',
        color: "#2F000E",
    },
    hoverlabel: {
        font: {
            family: "AdapterMonoVF",
        },
    },
    yaxis: {
        zeroline: false,
        fixedrange: true, // disable zooming
        gridcolor: "#30280D22",
    },
    xaxis: {
        fixedrange: true, // disable zooming,
        // gridcolor: "#30280D4D",
    },
};

var COLORS = {
    // Colors from theme are:
    // theme-accent
    // theme-foreground
    // theme-foreground + "4D"
    "sand": [
        "#D6CBA2",
        "#302C0D",
        "#30280D4D",
    ],
    "blue": [
        "#ADCBDC",
        "#002241",
        "#0022414D",
    ],
    "red": [
        "#DAABA5",
        "#2F000E",
        "#2F000E4D",
    ]
}

var config = {
    displayModeBar: false, // hide the Ploty bar
    responsive: true,
    // staticPlot: true, // no interaction at all (incl. no hover)
}

/**
 * Plotting a set of box charts comparing a dataset of two groups and two
 * options.
 * Expects
 * 
 * @param {*} node 
 * @param {*} name 
 * @param {*} groups - the label of each group
 * @param {*} options - the options that were asked
 * @param {*} values - 
 */
function BoxChart(node, name, groups, options, values, colors) {
    console.debug("BoxChart", node, name, groups, options, values, colors)

    if (!node || !name || groups.length != options.length != values.length / 2) {
        console.warn("Some of the BoxChart options were invalid. Groups and \
        options need to be of same length, and there need to be groups*options \
        arrays of values")
    }

    var container = document.createElement("div")
    node.appendChild(container)

    var data = []
    var x = []

    for (var i = 0; i < groups.length; i++) {

        var vals = i + groups.length / 2,
            len = values[vals].length // 4-13

        for (var k = 0; k < len; k++) {
            x[k] = groups[0]
        }

        for (var k = len; k < len * 2; k++) {
            x[k] = groups[1]
        }

        var trace = {
            y: values[vals - 1].concat(values[vals]),
            x: x,
            name: options[i],
            type: 'box',
            marker: {
                color: colors[i]
            }
        }
        data[i] = trace
    }

    var boxchart_layout = JSON.parse(JSON.stringify(layout))
    boxchart_layout.boxmode = 'group' // groups the values along x
    boxchart_layout.title = name

    Plotly.newPlot(container, data, boxchart_layout, config);
}

/**
 * Plotting Bar Charts
 */
function BarChart(node, title, label, groups, options, values, errors, offset, colors) {
    console.debug("BarChart", node, title, label, groups, options, values, errors, offset, colors)

    if (!node || !title) {
        console.warn("Some of the BarChart options were invalid.")
    }

    var container = document.createElement("div")
    var data = []

    node.appendChild(container)

    for (var i = 0; i < options.length; i++) {
        var vals = values[i]
        if (!isNaN(offset)) {
            vals = vals.map(function (val) {
                return val -= offset
            })
        }

        var trace = {
            y: vals,
            x: groups,
            name: options[i],
            marker: {
                color: colors[i]
            },
            error_y: {
                type: 'data',
                array: errors[i],
                visible: true,
                color: "#000000"
            },
            type: 'bar',
            base: offset
        }

        data[i] = trace
    }

    var barchart_layout = JSON.parse(JSON.stringify(layout))
    barchart_layout.barmode = 'group' // groups the values along x
    if (title) {
        barchart_layout.title = title
    }
    if (label) {
        barchart_layout.yaxis.title = label
    }

    Plotly.newPlot(node, data, barchart_layout, config);
}


/**
 * Initiate charts as found on the page
 */
window.addEventListener("load", function () {

    var theme = "blue",
        bodyTheme = document.getElementsByTagName("body")[0].className.match("theme-([A-z]*)");

    if (bodyTheme.length !== 0) {
        theme = bodyTheme[1]
    }

    var boxcharts = document.querySelectorAll(".boxchart")
    if (boxcharts) {
        boxcharts.forEach(function (node) {
            try {
                BoxChart(
                    node,
                    node.dataset.name,
                    node.dataset.groups.split(";"),
                    node.dataset.options.split(";"),
                    node.dataset.values.split(";").map(function (arrayString) {
                        return arrayString.split(",")
                    }),
                    COLORS[theme],
                )
            } catch (e) {
                console.error("Failed to create BoxChart: " + e)
            }
        })
    }

    var barcharts = document.querySelectorAll(".barchart")
    if (barcharts) {
        barcharts.forEach(function (node) {
            try {
                var plot_errors = [];
                
                if (node.dataset.errors) {
                    plot_errors = node.dataset.errors.split(";").map(function (arrayString) {
                        return arrayString.split(",")
                    });
                }

                BarChart(
                    node,
                    node.dataset.title,
                    node.dataset.label,
                    node.dataset.groups.split(";"),
                    node.dataset.options.split(";"),
                    node.dataset.values.split(";").map(function (arrayString) {
                        return arrayString.split(",")
                    }),
                    plot_errors,
                    node.dataset.offset,
                    COLORS[theme],
                )
            } catch (e) {
                console.error("Failed to create BarChart: " + e)
            }
        })
    }
})