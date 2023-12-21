const images = document.querySelectorAll(".slide img");
const slide = document.querySelector(".slide");

const lBtn = document.querySelector(".l-btn");
const rBtn = document.querySelector(".r-btn");

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

// 指定した場所の前に指定したノードを入れるというメソッド
slide.insertBefore(images[images.length - 1], images[0]);

const leftSlider = () => {
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0";
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
}

const rightSlider = () => {
    const slideImages = document.querySelectorAll(".slide img");
    slide.appendChild(slideImages[0]);
    slideImages[1].removeAttribute("style");
}

leftBtn.addEventListener("click", leftSlider);
rightBtn.addEventListener("click", rightSlider);

// window.setInterval(rightSlider, 2000);

lBtn.addEventListener("click", leftSlider);
rBtn.addEventListener("click", rightSlider);