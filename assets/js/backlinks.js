document.addEventListener("DOMContentLoaded", function () {

  // Collect all citation links that point to references
  const citationLinks = document.querySelectorAll('a[href^="#ref:"]');

  // Map reference ID -> array of citation elements
  const referenceMap = {};

  citationLinks.forEach((link, index) => {
    const refId = link.getAttribute("href").substring(1); // remove "#"

    // Create unique ID for each citation location
    const citationId = `cite-back:${index}`;
    link.setAttribute("id", citationId);

    if (!referenceMap[refId]) {
      referenceMap[refId] = [];
    }

    referenceMap[refId].push(citationId);
  });

  // For each referenced entry, append backlinks
  Object.keys(referenceMap).forEach(refId => {
    const referenceElement = document.getElementById(refId);
    if (!referenceElement) return;

    const backlinkContainer = document.createElement("span");
    backlinkContainer.className = "backlinks";

    referenceMap[refId].forEach((citationId, i) => {
      const backlink = document.createElement("a");
      backlink.href = `#${citationId}`;
      backlink.textContent = `${i + 1}`;
      backlink.title = "Back to citation no. " + `${i + 1}`;

      backlinkContainer.appendChild(backlink);
    });

    referenceElement.appendChild(backlinkContainer);
  });

});