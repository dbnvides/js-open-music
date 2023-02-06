

function themDarkMode(){
    const buttonDark = document.querySelector('.btn-dark-mode');
    const themeButton = 'btn-dark-mode-actived';
    const html = document.querySelector('html');

    buttonDark.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        
        const dmPref = localStorage.getItem('darkmode')

        if(!dmPref){
            localStorage.setItem('darkmode',true)
            buttonDark.classList.add(themeButton)
        }

        if(dmPref){
            localStorage.removeItem('darkmode')
            buttonDark.classList.remove(themeButton)
        }

    })

}

themDarkMode()

