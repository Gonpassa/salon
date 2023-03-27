let navButtons = document.querySelectorAll('.nav-item')

navButtons.forEach(li => {
    li.addEventListener('click', setActive)
})

function setActive(){
    document.querySelector('.active').classList.remove('active')
    this.classList.add('active')    
}