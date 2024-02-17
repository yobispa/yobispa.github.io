//JS
console.log("JS Loaded")

const cards = document.querySelectorAll(".card")
  // JavaScript to toggle images on hover
const imageContainer = document.querySelector('.image-container');
const defaultImage = document.querySelector('.default-image');
const hoverImage = document.querySelector('.hover-image');

let navLinks = document.querySelectorAll("ul li a");
let menuSection = document.querySelectorAll('menu li');
let loaded = sessionStorage.getItem("loadedKey")
checkLoadingscreen(loaded);


imageContainer.addEventListener('mouseenter', function () {
  defaultImage.style.display = 'none';
  hoverImage.style.display = 'block';
});

imageContainer.addEventListener('mouseleave', function () {
  defaultImage.style.display = 'block';
  hoverImage.style.display = 'none';
});


for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    goToPage(i)
  })
}
function goToPage(i) {

  switch (i) {
    case 0:
      open('https://www.instagram.com/yoandelobispa/', '_blank');
      break;
    case 1:
      location.href = ``
      break;
    case 2:
      open('https://www.linkedin.com/in/yoandel-obispa-4b7398273/', '_blank');
      break;
    case 3:
      open('mailto:yoandelobispa49@gmail.com', '_blank');
      break;
    case 4:
      location.href = ``
      break;
    case 5:
      open('https://wa.me/+31623018197', '_blank');
      break;
    case 6:
      open('https://github.com/yobispa', '_blank');
      break;
    case 7:
      location.href = ``
      break;
    case 8:
      location.href = ``
      break;
  }
}

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