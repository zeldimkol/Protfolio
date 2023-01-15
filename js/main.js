const btnDarkMode = document.querySelector('.dark-mode-btn')


// Проверка темной темы в LocalStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
}

// Включение ночного режима по кнопке

btnDarkMode.onclick = function() {
    console.log('Click')
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem("darkMode", "dark")
    } else {
        localStorage.setItem("darkMode", "light")
       
    }

}


// btnDarkMode.addEventListener('click', () => {
//     btnDarkMode.classList.toggle('dark-mode-btn--active')
//     const isDark = document.body.classList.toggle('dark')

//     if (isDark) {
//         localStorage.getItem('darkMode', 'dark')
//         console.log('dark')
//     } else {
//         localStorage.setItem("darkMode", "light")
//         console.log('light')
//     }


// })