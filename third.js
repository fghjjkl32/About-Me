const range = document.querySelector('#range');

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    //input[type='range']의 width 값을 가져온다.
    const label_width = getComputedStyle(label).getPropertyValue('width');
    //label의 width값을 가져온다.

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 30, -30);

    label.style.left = `${left}px`

    label.innerHTML = value;
})
