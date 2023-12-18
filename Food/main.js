const icons = document.querySelectorAll('.section-1-icons i');
let iconCounter = 0;

function updateIcons() {
    // Reset the current icon's class
    icons[iconCounter].classList.remove('transmute');

    // Update the counter and wrap around using modulo
    iconCounter = (iconCounter + 1) % icons.length;

    // Apply the class to the new current icon
    icons[iconCounter].classList.add('transmute');
}

// Set interval to update icons
setInterval(updateIcons, 3000);

const menu = document.querySelector('.menu');
const targetItems = document.querySelectorAll('.target');

// Toggle 'change' class for each target item
menu.addEventListener('click', () => {
    targetItems.forEach(item => item.classList.toggle('change'));
});


