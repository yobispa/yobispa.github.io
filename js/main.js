console.log("JS Loaded")
setTimeout(removeDN, 3000)

function removeDN() {
    document.querySelector(".display-none").classList.remove("display-none")
    document.querySelector("svg").classList.add("display-none")
    document.querySelector("body").classList.add("bg-licorice")
}