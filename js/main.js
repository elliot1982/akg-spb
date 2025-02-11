const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtImg.src = "./img/icons/nav-open.svg";
    }
}