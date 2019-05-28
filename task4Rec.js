// Task 4

// Creating a container to hold the HTML Output
const testHtml = document.querySelector("#test")
// Creating all the elements
const articleDivEl = document.createElement("div")
const headingEl = document.createElement("h3")
const loremDivEl = document.createElement("div")
const articleButtonEl = document.createElement("button")

//Creating text nodes to put on the newly created elements
headingText = document.createTextNode("Great News")
articleText = document.createTextNode("Lorem ipsum dolor sit amet...")
buttonText = "Read Article"


// Appending the html elements to the root div on index page, and use method chaing to append the textnodes to the elements the text nodes to the created elements
articleDivEl.appendChild(headingEl.appendChild(headingText))
articleDivEl.appendChild(loremDivEl.appendChild(articleText))
articleDivEl.appendChild(articleButtonEl).innerText = buttonText
articleDivEl.setAttribute("id", "article")

// Creating the #id attribute on the article div
testHtml.appendChild(articleDivEl)
    
    
// Adding the event listener to the button on page
document.querySelector("button").addEventListener("click", ()=> console.log("README"))