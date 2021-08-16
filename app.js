const title = document.querySelector(".hello h1");

function titleClick() {
    title.style.color = "blue";
}

function mouseEnter() {
    title.innerText = "Mouse is here!";
}

function mouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", titleClick);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);
