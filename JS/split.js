const leftWindow=document.querySelector(".left-window");
const rightWindow=document.querySelector(".right-window");

leftWindow.addEventListener("mouseover", ()=> {
        rightWindow.classList.remove("right-window-max");
        rightWindow.classList.add("right-window-min");
        leftWindow.classList.remove("left-window-min");
        leftWindow.classList.add("left-window-max");
    }

);

rightWindow.addEventListener("mouseover", ()=> {
        rightWindow.classList.remove("right-window-min");
        leftWindow.classList.remove("left-window-max");
        leftWindow.classList.add("left-window-min");
        rightWindow.classList.add("right-window-max");
    }

);