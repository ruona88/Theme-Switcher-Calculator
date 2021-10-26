const activateThemeTwo = function () {
    for(let item of document.querySelectorAll("*")) {
        item.classList.add("theme-2");
        item.classList.remove("theme-3");
    }
    document.querySelector(".toggle-2 .toggle-circle-2").classList.add("active");
    document.querySelector(".toggle-1 .toggle-circle-1").classList.remove("active");
    document.querySelector(".toggle-3 .toggle-circle-3").classList.remove("active");
}

const activateThemeThree = function () {
    for(let item of document.querySelectorAll("*")) {
        item.classList.add("theme-3");
        item.classList.remove("theme-2");
    }
    document.querySelector(".toggle-3 .toggle-circle-3").classList.add("active");
    document.querySelector(".toggle-2 .toggle-circle-2").classList.remove("active");
    document.querySelector(".toggle-1 .toggle-circle-1").classList.remove("active");
}

const activateThemeOne = function () {
    for(let item of document.querySelectorAll("*")) {
        item.classList.remove("theme-3");
        item.classList.remove("theme-2");
    }
    document.querySelector(".toggle-1 .toggle-circle-1").classList.add("active");
    document.querySelector(".toggle-2 .toggle-circle-2").classList.remove("active");
    document.querySelector(".toggle-3 .toggle-circle-3").classList.remove("active");
}

//Call themeone function when the window loads
window.onload = activateThemeOne;

document.getElementsByClassName("toggle-1")[0].onclick = activateThemeOne;
document.getElementsByClassName("toggle-2")[0].onclick = activateThemeTwo;
document.getElementsByClassName("toggle-3")[0].onclick = activateThemeThree;