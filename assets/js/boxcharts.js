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
function BoxChart(node, name, groups, options, values) {
    console.log("BoxChart", node, name, groups, options, values)

    if (!node || !name || groups.length != options.length != values.length / 2) {
        console.warn("Some of the BoxChart options were invalid. Groups and \
        options need to be of same length, and there need to be groups*options \
        arrays of values")
    }

    var container = document.createElement("div")
    node.appendChild(container)

    var data = []
    var x = []
    var colors = [
        // Sand theme
        // "#F9F7EF",
        "#D6CBA2",
        "#302C0D",
        "#30280D4D",
    ]

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

    var layout = {
        boxmode: 'group', // groups the values along x
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
            title: name,
            zeroline: false,
            fixedrange: true, // disable zooming
            gridcolor: "#30280D22",
        },
        xaxis: {
            fixedrange: true, // disable zooming,
            // gridcolor: "#30280D4D",
        },
    };

    Plotly.newPlot(container, data, layout, {
        displayModeBar: false, // hide the Ploty bar
        responsive: true,
        // staticPlot: true, // no interaction at all (incl. no hover)
    });
}

window.addEventListener("load", function () {

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
                    })
                )
            } catch (e) {
                console.error("Failed to create BoxChart: " + e)
            }
        })
    }
})