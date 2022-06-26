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