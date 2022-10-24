
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
let changeNumb = document.querySelector('.change_numb');

let numbers = [1, 2, 3, 4];
let i = 0;
//prev BTN
prevBtn.addEventListener('click', event => {
    if(!!event.target){
        changeNumb.textContent = '0' + numbers[getPreviousNumb()];
    }
});

function getPreviousNumb(){
    numbers[i]--;
    if(numbers[i] < 1){
        numbers[i] = 4;
    }
    return i;
}

//next BTN
nextBtn.addEventListener('click', event => {
    if(!!event.target){
        numbers[i]++;
    }
    if(numbers[i] > numbers.length) {
        numbers[i] = 1;
    }
    changeNumb.textContent = '0' + numbers[i];
});

prevBtn.addEventListener('mouseover', function(){
    prevBtn.style.backgroundColor = '#1E2E36';
});
prevBtn.addEventListener('mouseout', function(){
    prevBtn.style.backgroundColor = '';
});
nextBtn.addEventListener('mouseover', function(){
    nextBtn.style.backgroundColor = '#1E2E36';
});
nextBtn.addEventListener('mouseout', function(){
    nextBtn.style.backgroundColor = '';
});
