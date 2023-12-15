const icons = document.querySelectorAll('.section-1-icons i')
let iconCounter = 0

setInterval(() => {
    const currentIcon = icons[iconCounter];

    // Remove 'transmute' class from current icon
    currentIcon.classList.remove('transmute')

    // Increment counter or reset if it exceeds number of icons
    iconCounter = (iconCounter + 1) % icons.length

    // Add 'transmute' class to next icon
    icons[iconCounter].classList.add('transmute')
}, 3000)

const menu = document.querySelector('.menu')
const targetItems = document.querySelectorAll('.target')
menu.addEventListener('click', ()=>{
    targetItems.forEach((item)=>{
        item.classList.toggle('change')
    })
})


