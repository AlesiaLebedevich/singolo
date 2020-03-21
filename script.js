
// Navigation header

const MENU = document.getElementById('menu');

MENU.addEventListener('click', () => {
    menu.querySelectorAll('.menu-link').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
});

// Get a Quote

const FORM = document.getElementById('contact');
const CLOSE_BUTTON = document.getElementById('close_btn');
const NAME = document.getElementById('name');
const EMAIL = document.getElementById('email');

FORM.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(NAME.checkValidity() && EMAIL.checkValidity()) {
        const subject = document.getElementById('subject-text').value.toString();
        const describe = document.getElementById('textarea-text').value.toString();
        document.getElementById('result_subject').innerText = subject ? subject : " Без темы";
        document.getElementById('result_describe').innerText = describe ? describe : " Без описания";
        document.getElementById('message_block').classList.remove('hidden');
    }
});

 CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result_subject').innerText = " ";
    document.getElementById('result_describe').innerText = " ";
    document.getElementById('message_block').classList.add('hidden');
    FORM.reset();
 });

// Add border 

const PORTFOLIO = document.getElementById("portfolio-image");

PORTFOLIO.addEventListener('click', () => {
    PORTFOLIO.querySelectorAll('div > img').forEach(el => el.classList.remove('active_border'));
    if(event.target.tagName === 'IMG') {
        event.target.classList.add('active_border');
    }
});

 // Portfolio

const PORTFOLIO_MENU = document.getElementById('portfolio-navigation-item');

PORTFOLIO_MENU.addEventListener('click', () => {
    PORTFOLIO_MENU.querySelectorAll('.portfolio-navigation_item').forEach(el => el.classList.remove('portfolio_active'));
    event.target.classList.add('portfolio_active');
});
 
const classesArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const classesArrayNew = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

function shuffleImg() {
    shuffle(classesArray);
    PORTFOLIO.querySelectorAll('div > img').forEach((el, i) => {
        el.src = "assets/img/" + classesArray[i] + ".png";
    });
}

function shuffle(randomArray){
    for(let i = randomArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let randomArrayNew = randomArray[j];
        randomArray[j] = randomArray[i];
        randomArray[i] = randomArrayNew;
    }
    return randomArray;        
}

//slider

let items = document.querySelectorAll(".item-element");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("slider-active", direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("next", direction);
        this.classList.add("slider-active");
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
}

document.querySelector(".control.left").addEventListener("click", function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
}

document.querySelector(".control.right").addEventListener("click", function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});
