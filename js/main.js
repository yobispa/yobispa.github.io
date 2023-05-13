//JS
console.log("JS Loaded")

let loaded = sessionStorage.getItem("loadedKey")
console.log(loaded)
checkLoadingscreen(loaded)

function checkLoadingscreen(loaded) {
    
    if(loaded == 'true') {
        document.querySelector(".display-none").classList.remove("display-none")
        document.querySelector("svg").classList.add("display-none")
        document.querySelector("body").classList.add("bg-licorice")
        console.log("You have seen loading screen already")
    } else {
        setTimeout(removeDN, 3000)
        loaded = true;
        sessionStorage.setItem("loadedKey", loaded)
    }
    
}

function removeDN() {
    document.querySelector(".display-none").classList.remove("display-none")
    document.querySelector("svg").classList.add("display-none")
    document.querySelector("body").classList.add("bg-licorice")
}