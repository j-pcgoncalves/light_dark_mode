const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme dynamically
const switchTheme = event => {
    console.log(event);
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);