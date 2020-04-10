window.addEventListener("load",setRedirectConfirmationDialogs);

function clickRedirectHandler(event) {
    // Handles the click event for the <a> element
    if(window.confirm(`Do you want to go at ${event.target.getAttribute('href')}`)){
        window.location = event.target.getAttribute("href");
    }else{
        event.preventDefault();
    }
}
  
function setRedirectConfirmationDialogs() {
    // Registers clickRedirectHandler for all <a> elements on the page
    var aElements = document.getElementsByTagName("a");
    for (let i = 0; i < aElements.length; i++) {
        console.log("entre al for");
        aElements[i].addEventListener("click",clickRedirectHandler);
    }
}