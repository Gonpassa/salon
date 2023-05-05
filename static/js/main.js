let navButtons = document.querySelectorAll('.nav-item')

navButtons.forEach(li => {
    li.addEventListener('click', setActive)
})

function setActive(){
    document.querySelector('.active').classList.remove('active')
    this.classList.add('active')    
}

const hamburgerMenu = document.querySelector('.fa-bars')

hamburgerMenu.addEventListener('click', showMenu)

function showMenu(){
    const nav = document.querySelector('.nav')
    if(nav.style.display === 'none'){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }
}