// Меню

const knopkaMenu = document.querySelector(".knopka-menu")
const sideNavPanel = document.querySelector(".nav-panel")
const bace = document.querySelector(".bace")
const knopkaMenuToo = document.querySelector(".knopka-menu-too")
const overlayMenu = document.querySelector(".overlay-menu")

knopkaMenu.addEventListener("click", panel)

knopkaMenuToo.addEventListener("click", panel)

overlayMenu.addEventListener("click", panel)

function panel(){
  sideNavPanel.classList.toggle("active")
  bace.classList.toggle("active")
  overlayMenu.classList.toggle("active")
}

// // Input
    
const input = document.querySelector(".top-input")
const scretch = document.querySelector(".scretch")
const LeftTopMenu = document.querySelector(".burger-menu-one")
const CenterTopMenu = document.querySelector(".burger-menu-too")
const RigthTopMenu = document.querySelector(".burger-menu-three")
const buttonleft = document.querySelector(".leftbutton")
const microScretch = document.querySelector(".Micro_Scretch")
const scretchMain = document.querySelector(".scretch-main")
    
scretch.addEventListener("click", InputSearch)

buttonleft.addEventListener("click", InputSearch)

function InputSearch(){
  input.classList.toggle("active")
  LeftTopMenu.classList.toggle("active")
  RigthTopMenu.classList.toggle("active")
  CenterTopMenu.classList.toggle("active")
  scretch.classList.toggle("active")
  buttonleft.classList.toggle("active")
  microScretch.classList.toggle("active")
  scretchMain.classList.toggle("active")
}

// Абстрактный код для модальных окон

const buttons = document.querySelectorAll('[data-toggle]');
const overlay = document.querySelector('.overlay')
const crossMicrophone = document.querySelector('#cross')
const modals = document.querySelectorAll('.modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-toggle');
    const modal = document.querySelector(`[data-id="${modalId}"]`);
    modal.classList.add('active');
    overlay.classList.add("active");

  });
  
});

overlay.addEventListener('click', Overlay_Cross)

crossMicrophone.addEventListener('click', Overlay_Cross)

function Overlay_Cross(){
  overlay.classList.remove('active');
  modals.forEach(modal => modal.classList.remove('active'));
}

// АУДИО ПРИ НАЖАТИЯ НА МИКРАФОН

const voiceAudio = new Audio("audio/golos.mp3")
const btnMicrafons = document.querySelectorAll(".btn-micraphone")

btnMicrafons.forEach(btnMicrafon => {
  btnMicrafon.addEventListener('click', () =>{
    voiceAudio.play()
  })
})












