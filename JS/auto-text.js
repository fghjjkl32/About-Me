let blinkText = document.querySelector('.typing');
let typingBool = false;
let typingIdx = 0;
let arrIndex = 0;
let del = -1;
let tyInt = null;

// 타이핑될 텍스트를 가져온다 
const textEl = ["Communication", "Focused", "Enthusiasm"];
let typingTxt = textEl[arrIndex];

if (typingBool == false) {
    // 타이핑이 진행되지 않았다면 
    typingBool = true;
    tyInt = setInterval(typing, 150); // 첫번재 반복동작 
}

function typing() {
    if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복 
        blinkText.append(typingTxt[typingIdx]);
        // 한글자씩 이어준다. 

        typingIdx++;
        if (typingIdx == typingTxt.length) {
            //첫번째 단어가 써지면 1초쉰다.
            clearInterval(tyInt);
            setTimeout(function () {
                tyInt = setInterval(typing, 150);
            }, 1000);
        }
    } else {
        //한문장이끝나면
        if (-typingTxt.length - 1 < del) {
            //한글자씩 지운다.
            blinkText.innerHTML = typingTxt.slice(0, del);
            del--;
        } else {

            if (arrIndex >= textEl.length - 1) {
                arrIndex = 0;
                // 배열이 다 돌았으면 처음부터 돌아간다.
            } else {
                arrIndex++;
            }

            variableInit();
            //1초후 다음분장 타이핑 
            clearInterval(tyInt);
            setTimeout(function () {
                tyInt = setInterval(typing, 150);
            }, 1000);
        }
    }
}

function variableInit() {
    //변수초기화 
    typingIdx = 0;
    del = -1;
    typingTxt = textEl[arrIndex];
}