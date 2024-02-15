// scroll sections active link
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navlinks.forEach(nav => {
                nav.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })
    
    // sticky navbar
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100)
}