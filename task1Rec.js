// Task 1

// First solution using polling and set intervall
const checkDomChange = setInterval(()=>{
    if(newDivElement){
        // if the newly added div element gets appended to the #content div, we then need to get the first child to target the span
        const someTextSpan = htmldiv.querySelector(":first-child")
        someTextSpan.style.color = "red"
        clearInterval(checkDomChange)
    }
},1000)

// Trying a newer solution using mutation observer(more performant)
const colorObserver = new MutationObserver((mutations)=>{
    mutations.forEach((mutation)=>{
        if(mutation.addedNodes.length){
            console.log("the last changed node in the dom was done to:", mutation.addedNodes[0]," let me now change the color for you")

            // Setting the span color to red
            htmldiv.querySelector(":first-child").style.color = "red"
            console.log("My jobb here is done ,let me now leave my watch")
            
            // Unsubscribing the observer
            colorObserver.disconnect()
            console.log("The observer has left the building...")
        }
    })

})

colorObserver.observe(htmldiv, {childList: true})