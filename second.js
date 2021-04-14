let slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides .box"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 160,
    slideMargin = 20,
    prevBtn = document.querySelector(".chevron.chevron-left"),
    nextBtn = document.querySelector(".chevron.chevron-right");
const bigBox = document.querySelector(".big-box-image"),
    content = ["./imgs/고양이1.jpeg", "./imgs/그림.jpeg", "./imgs/베이커리1.jpeg", "imgs/산책.jpeg", "imgs/베이커리2.jpeg"];

makeClone();

function makeClone() {
    currentIdx = 0;
    for (let i = 0; i < slideCount; i++) {
        let cloneSlide = slide[i].cloneNode(true);
        slides.appendChild(cloneSlide);
    }
    for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function () {
        slides.classList.add('animated');
    }, 100)
}

function updateWidth() {
    var currentSlides = document.querySelectorAll(".slides .box");
    var newSlideCount = currentSlides.length;
    var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPos() {
    var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

nextBtn.addEventListener('click', () => {
    moveSlide(currentIdx + 1);
    if (currentIdx == slideCount) {
        addImage(0);
    } else addImage(currentIdx);
});

prevBtn.addEventListener('click', () => {
    moveSlide(currentIdx - 1);
    if (currentIdx < 0) {
        addImage(currentIdx + 5);
    } else addImage(currentIdx);

});

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    if (currentIdx == slideCount || currentIdx == -slideCount) {

        setTimeout(function () {
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function () {
            slides.classList.add('animated');
        }, 600);
    }
}

function addImage(num) {
    bigBox.style.background = `url(${content[num]})`;
    bigBox.style.backgroundSize = `cover`
}