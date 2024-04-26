const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const footer_Btn = document.getElementById('footer_button')
    const socialMenu =document.getElementById('socialMenu')

    const toggleMenu = () =>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        socialMenu.classList.toggle('hidden')
        socialMenu.classList.toggle('flex')
       /*  hamburgerBtn.classList.toggle('hamburger-btn') */
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    footer_Btn.addEventListener('click',toggleMenu)
    socialMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)