function submenuWrap() {

    const submenuWrap = document.querySelector('.submenu__wrap')
    const trigger = document.querySelector('.footer__english__menu')
    const arrow = document.querySelector('.footer__submenu__arrow')

    trigger.addEventListener('click', () => {
    submenuWrap.classList.toggle('active')
    arrow.classList.toggle('active')
    })
}
submenuWrap()