// ======================NAVBAR======================
let list = document.querySelector('header nav ul');
let links = document.querySelectorAll('header nav ul li');
// get the mega menu
let megaMenu = document.querySelector('header nav .megaMenu');
list.addEventListener('click', (e) => {

    if (e.target.tagName === 'A') {

        links.forEach(link => {
            link.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
        megaMenu.classList.add('show')
    }
    if (e.target.textContent === 'Other Links') {
        megaMenu.classList.toggle('show')
    }

});
// =========================HERO===========================
// get ele by id   
let toDown = document.getElementById('toDown');
// add click event to the element
toDown.addEventListener('click', () => {
    // scroll the page to 250px from the top
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
    });
});
// =============================VIDEO PLAYER===============================
const allVideoSrc = [
    {
        id: 1,
        title: 'How To Create Sub Domain',
        src: ' https://www.youtube.com/embed/DqAxcqu5h78',
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "true"
    },
    {
        id: 2,
        title: 'Playing With The DNS',
        src: 'https://www.youtube.com/embed/mpQZVYPuDGU ',
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "true"
    },
    {
        id: 3,
        title: 'Playing With The DNS',
        src: 'https://www.youtube.com/embed/MmMEbLCt_-c',
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "true"
    },
]
let title = document.querySelector('.title');
let videoContainer = document.querySelector('iframe');
let videos = document.querySelector('.video');
let actives = document.querySelectorAll('.video li');




document.addEventListener('DOMContentLoaded', () => {
    videoContainer.setAttribute('src', allVideoSrc[0].src)
    title.innerHTML = allVideoSrc[0].title
})

// add event click on videos
videos.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        let ele = e.target.parentElement
        let id = e.target.dataset.id;
        let text = e.target.textContent
        changeVideo(id)
        changeTitle(text)
        addActiveClass(actives, ele)
    }
});
function changeTitle(text) {
    title.innerHTML = text;
};
function changeVideo(id) {
    for (let i of allVideoSrc) {
        if (i.id == id) {
            playVideo(i.src)
        }
    }
}
function playVideo(src) {
    videoContainer.setAttribute('src', src)
}
function addActiveClass(array, ele) {
    array.forEach((e) => {
        e.classList.remove('active')
    })
    ele.classList.add('active')
}
