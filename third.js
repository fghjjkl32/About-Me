const range = document.querySelector('#range');


range.addEventListener('input', (event) => {
    const value = +event.target.value;
    const label = event.target.nextElementSibling;
    //요소를 가져온다.

    const range_width = getComputedStyle(event.target).getPropertyValue('width');
    //input[type='range']의 width 값을 가져온다.
    const label_width = getComputedStyle(label).getPropertyValue('width');
    //label의 width값을 가져온다.
    const third_boxes = document.querySelector('.third_boxes');

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);
    //label_width,range_width의 px를 뺀상태로 숫자로 가져온다

    // console.log(range_width, label_width)
    // console.log(num_width, num_label_width)

    const max = +event.target.max;
    const min = +event.target.min;

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, -60, -10);
    // console.log(`left = ${left}`);

    label.style.left = `${left}px`
    if (left <= -25) {
        third_boxes.style.transform = 'translateX(' + 0 + 'px)';
    } else third_boxes.style.transform = 'translateX(' + -left * 6 + 'px)';

    // console.log(third_boxes.style.transform);

    label.innerHTML = Math.round(value);

    addImageSize(value);
})

function addImageSize(value) {
    const boxes = document.querySelector(".third_boxes");
    if (Math.round(value) === 1) {
        removeActiveClass();
        boxes.childNodes[1].classList.add('active');
        addText(Math.round(value));
    } else if (Math.round(value) === 2) {
        removeActiveClass();
        boxes.childNodes[3].classList.add('active');
        addText(Math.round(value));
    } else if (Math.round(value) === 3) {
        removeActiveClass();
        boxes.childNodes[5].classList.add('active');
        addText(Math.round(value));
    } else if (Math.round(value) === 4) {
        removeActiveClass();
        boxes.childNodes[7].classList.add('active');
        addText(Math.round(value));
    }
}

function removeActiveClass() {
    const box = document.querySelectorAll(".box");
    box.forEach(box => {
        box.classList.remove('active');
    })
}

function addText(value) {
    const num = document.querySelector('.third.texts strong');
    const hobby = document.querySelector('.third.texts h2');
    const hobbyText = document.querySelector('.third.texts h3');
    num.innerHTML = `0${value}`;

    if (value === 1) {
        hobby.innerHTML = `내가 좋아하는 고양이들`
        hobbyText.innerHTML = `저희집 고양이들 샴고양이 초코와 코숏 치즈입니다`
    } else if (value === 2) {
        hobby.innerHTML = `아이패드 드로잉`
        hobbyText.innerHTML = `나만의 그림을 그리는걸 좋아합니다. 사진을 찍고 아이패드로 그림을 완성하면 그만큼 뿌듯한 일이 없습니다!`
    } else if (value === 3) {
        hobby.innerHTML = `인테리어`
        hobbyText.innerHTML = `내 집 마련 로망실현 - 언젠간 살면서 직접 집을 지어보는게 목표 중 하나입니다!`
    } else if (value === 4) {
        hobby.innerHTML = `칵테일`
        hobbyText.innerHTML = `술을 맛있게 먹는걸 좋아합니다 😄`
    }
}