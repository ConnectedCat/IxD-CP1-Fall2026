let thisPage = document.getElementById("docBody")

let colorBtn = document.getElementById("colorChange")
let textBtn = document.getElementById("addText")
let toggleBtn = document.getElementById("toggleBtn")
let imgTT = document.getElementById("imageToToggle")

let changingColor = () => {
    let redC = Math.random() * 255
    let greenC = Math.random() * 255
    let blueC = Math.random() * 255

    thisPage.style.backgroundColor = "rgb(" + redC + ", " + greenC + ", " + blueC + ")"
}

let addingText = () => {
    console.log("firing!")
    let textRecepticle = document.getElementById("textArea")

    let newElem = document.createElement("p")
    console.log(newElem)
    newElem.innerHTML = "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"

    textRecepticle.appendChild(newElem)
}

let togglingImage = (event) => {
    console.log(event.target)
    
    if(event.target == imgTT){
        console.log("Clicked Image")
    }

    if(imgTT.alt == "First Quokka Image"){
        imgTT.alt = "Second Quokka Image"
        imgTT.src = "images/quokka2.jpg"
    }
    else {
        imgTT.alt = "First Quokka Image"
        imgTT.src = "images/quokka1.webp"
    }
    
    
    //console.log(imgTT)
}

console.log(imgTT)

imgTT.addEventListener("click", togglingImage)
colorBtn.addEventListener("click", changingColor)
textBtn.addEventListener("click", addingText)
toggleBtn.addEventListener("click", togglingImage)