// Боковая, выплывающяя панель 


// Меню

const knopkaMenu = document.querySelector(".knopka-menu")
const sideNavPanel = document.querySelector(".nav-panel")
const bace = document.querySelector(".bace")
const knopkaMenuToo = document.querySelector(".knopka-menu-too")
const overlay = document.querySelector(".overlay")

knopkaMenu.addEventListener("click", () =>{
    sideNavPanel.classList.toggle("active")
    bace.classList.toggle("active")
    overlay.classList.toggle("active")
})

knopkaMenuToo.addEventListener("click", () =>{
    sideNavPanel.classList.toggle("active")
    bace.classList.toggle("active")
    overlay.classList.toggle("active")
})

overlay.addEventListener("click", () =>{
    sideNavPanel.classList.toggle("active")
    bace.classList.toggle("active")
    overlay.classList.toggle("active")
})

// Input
    
    const input = document.querySelector(".top-input")
    const scretch = document.querySelector(".scretch")
    const LeftTopMenu = document.querySelector(".burger-menu-one")
    const CenterTopMenu = document.querySelector(".burger-menu-too")
    const RigthTopMenu = document.querySelector(".burger-menu-three")
    const buttonleft = document.querySelector(".leftbutton")
    const microScretch = document.querySelector(".Micro_Scretch")
    const scretchMain = document.querySelector(".scretch-main")
    
    scretch.addEventListener("click", function(){
        input.classList.toggle("active")
        LeftTopMenu.classList.toggle("active")
        RigthTopMenu.classList.toggle("active")
        CenterTopMenu.classList.toggle("active")
        scretch.classList.toggle("active")
        buttonleft.classList.toggle("active")
        microScretch.classList.toggle("active")
        scretchMain.classList.toggle("active")
    })

    buttonleft.addEventListener("click", function(){
        input.classList.toggle("active")
        LeftTopMenu.classList.toggle("active")
        RigthTopMenu.classList.toggle("active")
        CenterTopMenu.classList.toggle("active")
        scretch.classList.toggle("active")
        buttonleft.classList.toggle("active")
        microScretch.classList.toggle("active")
        scretchMain.classList.toggle("active")
    })


    // Голосовой поиск

   const knopkamicrafon = document.querySelector(".knopka-micrafon")
   const knopkamicrafonToo = document.querySelector(".knopka-micrafon-too")
   const microphone__permission = document.querySelector(".microphone__permission")
   const cross = document.querySelector("#cross")
   const overlay__too = document.querySelector(".overlay-too")
   const voiceAudio = new Audio("audio/golos.mp3")
   const knopkamicrafon_too = document.querySelector(".knopka-micraf")
   
knopkamicrafon.addEventListener("click", function(){
    microphone__permission.classList.toggle("active")
    overlay__too.classList.toggle("active")
    voiceAudio.play()
})

knopkamicrafon_too.addEventListener("click", function(){
    voiceAudio.play()
})

cross.addEventListener("click", function(){
    microphone__permission.classList.toggle("active")
    overlay__too.classList.toggle("active")
})

overlay__too.addEventListener("click", () => {
    microphone__permission.classList.toggle("active")
    overlay__too.classList.toggle("active")
})

// Вторая часть

knopkamicrafonToo.addEventListener("click", function(){
    microphone__permission.classList.toggle("active")
    overlay__too.classList.toggle("active")
    voiceAudio.play()
})



// Правая Верхняя часть

const body = document.querySelector("body")
const knopkaCamera = document.querySelector(".knopka-camera")
const leftTopMenu = document.querySelector("#box-shadow-left")
const overlay__three = document.querySelector(".overlay-three")

knopkaCamera.addEventListener("click", function(){
    leftTopMenu.classList.toggle("active")
    overlay__three.classList.toggle("active")
})

overlay__three.addEventListener("click", () => {
    leftTopMenu.classList.toggle("active")
    overlay__three.classList.toggle("active")
})


// Правая Верхняя Вторая часть


const knopka_kolocolchik = document.querySelector(".knopka-kolocolchik")
const notifications = document.querySelector("#notifications")
const overlay__four = document.querySelector(".overlay-four")

knopka_kolocolchik.addEventListener("click", () =>{
    notifications.classList.toggle("active-popup")
    overlay__four.classList.toggle("active")
})

overlay__four.addEventListener("click", () =>{
    notifications.classList.toggle("active-popup")
    overlay__four.classList.toggle("active")
})


// Правая Верхняя Третья(аккаунт) часть

const mainAccaunt = document.querySelector(".main-accaunt")
const Accaunt = document.querySelector("#accaunt")
const overlay__five = document.querySelector(".overlay-five")

Accaunt.addEventListener("click", () =>{
    mainAccaunt.classList.toggle("active-popup")
    overlay__five.classList.toggle("active")
})

overlay__five.addEventListener("click", () => {
    mainAccaunt.classList.toggle("active-popup")
    overlay__five.classList.toggle("active")
})








