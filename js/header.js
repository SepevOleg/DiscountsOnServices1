// submenu_item
function submenu() {

    const submenu = document.querySelector('.submenu')
    const trigger = document.querySelector('.with__submenu')
    const arrow = document.querySelector('.submenu__arrow')

    trigger.addEventListener('click', () => {
    submenu.classList.toggle('active')
    arrow.classList.toggle('active')
    })
}
submenu()

// submenu__language-wrap
function submenuLanguageWrap() {

    const submenuLanguageWrap = document.querySelector('.submenu__language_wrap')
    const trigger = document.querySelector('.english__menu')
    const arrow = document.querySelector('.submenu__arrow_language')

    trigger.addEventListener('click', () => {
    submenuLanguageWrap.classList.toggle('active')
    arrow.classList.toggle('active')
    })
}
submenuLanguageWrap()

// media burger 

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const btn_login = document.querySelector("#btn_log")
const body = document.body;

hamb.addEventListener("click", hambHandler)

function hambHandler(e){
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active")
  body.classList.toggle("noscroll")
  
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

function renderBtnlogin() {
  btnLogin.appendChild(btn_log)
}