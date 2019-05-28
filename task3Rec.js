// Task 3
const $iframe = document.querySelector("#widgetIframe")

const displayIframeInnerSpanText = (domEl) => {
    console.log("Found you, you little span!", domEl)
    
}

// Checking if the iframe in the html has loaded before trying to target the span element
$iframe.onload = function () {
    const innerFrame = $iframe.contentDocument || $iframe.contentWindow.document;
    const iframeDiv = innerFrame.querySelector("#content")
    const spanInIframe = iframeDiv.querySelector("span")
    
    // using this "callback" to display the text in the iframe
    displayIframeInnerSpanText(spanInIframe)
}