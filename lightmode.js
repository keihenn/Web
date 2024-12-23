let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

// enable the light mode by adding the class
const enableLightmode = () => { 
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

// disable the light mode by removing the class
const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', 'null')
}

// if condition that checks if the light mode is active or not
if(lightmode === "active") enableLightmode()

// event listener that when you click on the theme switch button it will toggle the light mode
themeSwitch.addEventListener ("click", () => {
    // it will retain the current theme mode
    lightmode = localStorage.getItem('lightmode')
    // if condition that checks if the light mode is active or not
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})  