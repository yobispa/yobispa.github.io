//JS
console.log("JS Loaded")

let loaded = sessionStorage.getItem("loadedKey")
checkLoadingscreen(loaded);

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

let navLinks = document.querySelectorAll("ul li a")

let menuSection = document.querySelectorAll('menu li');

// for clickable event
menuSection.forEach(v=> {
  v.onclick = (()=> {
   setTimeout(()=> {
      menuSection.forEach(j=> j.classList.remove('active'))
    v.classList.add('active')
  },300)
   })
})

// for window scrolldown event

window.onscroll = (()=> {
  let mainSection = document.querySelectorAll('main section');

  mainSection.forEach((v,i)=> {
    let rect = v.getBoundingClientRect().y
    if(rect < window.innerHeight-200){
      menuSection.forEach(v=> v.classList.remove('active'))
      menuSection[i].classList.add('active')
    }
  })
})