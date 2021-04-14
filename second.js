let slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides .box"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 160,
    slideMargin = 20,
    prevBtn = document.querySelector(".chevron.chevron-left"),
    nextBtn = document.querySelector(".chevron.chevron-right");
const bigBox = document.querySelector(".big-box-image"),
    introduceMent = document.querySelector(".introduce_ment"),
    content = ["image/프로필1.jpeg", "image/MBTI.jpeg", "image/전역.jpeg", "image/vehicle.jpeg", "image/ppt.png", "image/wecode.jpeg"],
    introduceMents = [`안녕하세요😆 프론트엔드 개발자가 되고싶은 98년생 전건우입니다 저의 대해 잠깐 소개 해드리겠습니다!`,
        "MBTI는 10번 하면 9번 정도 ISFP나오는 진성 ISFP입니다. 낯을 많이 가리지만 먼저 말을 걸어주시면 감사하겠습니다 (´._.`) <br> 현재를 즐기고 남에 대한 마음을 나누는것을 좋아합니다!",
        "20년 12월 16일 공군 797기 만기전역하여 전역한지 4개월 됐고 공부하기 위해서 1월부터 서울로 올라와서 서울에서 생활한지 3개월 됐습니다 <br> 혹시 서울 맛집 알려주면 감사하겠습니다🙏",
        "고등학교는 자동차IT과를 졸업하고 삼성화성캠퍼스에서 협력회사를 1년 다니면서 회의감에 그만두고 대학교 전자공학과 1학년 다니다 군 복무기간중 그동안 내가 좋아하는게 뭘까? 라는 생각을 했습니다",
        "간혹 취미로 ppt제작이나 디자인 하는것을 좋아했지만 직업으로 삼기는 부담스럽고 똥손💩이라 디자이너라는 길은 거리감이있었습니다. 그래도 완성된 작품을 구경하거나 디자인 트렌드를 보는것을 되게 좋아했습니다.",
        "그러다 애플의 인터렉티브한 홈페이지를 보고 반해서 프론트엔드라는 직업을 알게 되었습니다. 프론트엔드 라는 직업은 굉장히 매력적이라고 느껴지고 지금 이자리까지 왔습니다! 비록 낮은 나이지만 잘 부탁 드리겠습니다😊"];

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
        addImage(currentIdx + 6);
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
    bigBox.style.background = `center url(${content[num]}) no-repeat`;
    bigBox.style.backgroundSize = `cover`
    introduceMent.innerHTML = `${introduceMents[num]}`;
}