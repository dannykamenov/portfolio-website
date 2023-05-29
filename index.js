let hover = document.querySelector('.article-title-section');
let body = document.querySelector('body');
let i = document.querySelectorAll('i');
let h2 = document.querySelectorAll('h2');
let img = document.querySelector('.article-image-section');
let desc = document.querySelector('.article-description-section');
let title = document.querySelector('.article-title-section');
let navSec = document.querySelector('.article-nav-section');
let navclick = document.querySelectorAll('.navclick');
let navs = document.querySelectorAll('.nav-section');
let logo = document.querySelector('.logo-img');
let p = document.querySelectorAll('p');


hover.addEventListener('mouseenter', function() {
    body.style.backgroundColor = 'white';
    body.style.transition = 'all 0.5s ease-in-out';
    navSec.style.transition = 'all 0.5s ease-in-out';
    navSec.style.borderLeft = '1px solid rgb(6, 10, 25)';
    navSec.style.borderTop = '1px solid rgb(6, 10, 25)';
    nav.style.transition = 'all 0.5s ease-in-out';
    nav.style.borderBottom = '1px solid rgb(6, 10, 25)';
    desc.style.transition = 'all 0.5s ease-in-out';
    desc.style.borderLeft = '1px solid rgb(6, 10, 25)';
    title.style.transition = 'all 0.5s ease-in-out';
    title.style.borderTop = '1px solid rgb(6, 10, 25)';
    p.forEach(x => {
        x.style.transition = 'all 0.5s ease-in-out';
        x.style.color = 'rgb(6, 10, 25)';
    });
    logo.style.transition = 'all 0.5s ease-in-out';
    logo.src = 'Resources/LOGOBRO.png'
    logo.style.transitionDelay = '1s';
    navs.forEach(x => {
        x.style.transition = 'all 0.5s ease-in-out';
        x.style.borderLeft = '1px solid rgb(6, 10, 25)';
    });
    navclick.forEach(x => {
        x.style.color = 'rgb(6, 10, 25)';
        x.style.transition = 'all 0.5s ease-in-out';
    });
    i.forEach(x => {
        x.style.color = 'rgb(6, 10, 25)';
        x.style.transition = 'all 0.5s ease-in-out';
    });

    h2.forEach(x => {
        x.style.color = 'rgb(6, 10, 25)';
        x.style.transition = 'all 0.5s ease-in-out';
    })

})

hover.addEventListener('mouseleave', function() {
    body.style.backgroundColor = 'rgb(6, 10, 25)';
    body.style.transition = 'all 0.5s ease-in-out';
    navSec.style.transition = 'all 0.5s ease-in-out';
    navSec.style.borderLeft = '1px solid rgb(255, 255, 255, 0.1)';
    navSec.style.borderTop = '1px solid rgb(255, 255, 255, 0.1)';
    nav.style.transition = 'all 0.5s ease-in-out';
    nav.style.borderBottom = '1px solid rgb(255, 255, 255, 0.1)';
    desc.style.transition = 'all 0.5s ease-in-out';
    desc.style.borderLeft = '1px solid rgb(255, 255, 255, 0.1)';
    title.style.transition = 'all 0.5s ease-in-out';
    title.style.borderTop = '1px solid rgb(255, 255, 255, 0.1)';
    p.forEach(x => {
        x.style.transition = 'all 0.5s ease-in-out';
        x.style.color = 'white';
    });
    logo.style.transition = 'all 0.5s ease-in-out';
    logo.src = 'Resources/LOGO FINAL.png'
    logo.style.transitionDelay = '1s';
    navs.forEach(x => {
        x.style.transition = 'all 0.5s ease-in-out';
        x.style.borderLeft = '1px solid rgb(255, 255, 255, 0.1)';
    });
    navclick.forEach(x => {
        x.style.color = 'white';
        x.style.transition = 'all 0.5s ease-in-out';
    });

    i.forEach(x => {
        x.style.color = 'white';
        x.style.transition = 'all 0.5s ease-in-out';
    });

    h2.forEach(x => {
        x.style.color = 'white';
        x.style.transition = 'all 0.5s ease-in-out';
    })
});

img.addEventListener('click', function(e) {
    location.href = 'video.html';
});

desc.addEventListener('click', function(e) {
    location.href = 'contact1.html';
});