//JS
console.log("JS Loaded")

let loaded = sessionStorage.getItem("loadedKey")
console.log(loaded)
checkLoadingscreen(loaded)

function checkLoadingscreen(loaded) {
    
    if(loaded == 'true') {
        document.querySelector(".display-none").classList.remove("display-none")
        document.querySelector(".svg-loader").classList.add("display-none")
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
    document.querySelector(".svg-loader").classList.add("display-none")
    document.querySelector("body").classList.add("bg-licorice")
}
const imageSrc = document.querySelector(".team");
imageSrc.addEventListener("mouseover", changeImage);

function changeImage() {
    imageSrc.src = "media/hitTeam.jpg";
}

let section = document.querySelectorAll(".g")
let navLinks = document.querySelectorAll("ul li a")

window.onscroll = () => {

    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove("current")
                document.querySelector('ul li a[href*=' + id +']').classList.add("current")
            })
        }
    })
}