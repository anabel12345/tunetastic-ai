function dropDown(triggerButton, navLinks){
    triggerButton.addEventListener('click', () => {
        if (window.innerWidth < 800) {
            navLinks.classList.toggle('show');
        }
    })
}