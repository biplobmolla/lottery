const number = document.getElementById('number');
let selected = document.getElementById('selected');
let option = document.getElementsByClassName('option');
let Button = document.getElementById('button');
var init = 10;
Button.addEventListener('click', () => {
    let abc = setInterval(() => {
        function random(min, max) {
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            for (let i = 1; i < option.length; i++) {
                let optValue = option[i].value;
                if (num == optValue) {
                    if (option[0].getAttribute('selected') == "") {
                        option[0].removeAttribute('selected');
                    }
                    if (option[optValue].getAttribute('selected') == "") {
                        option[optValue].removeAttribute('selected');
                    }
                    if (option[optValue].getAttribute('selected') == null) {
                        option[optValue].setAttribute('selected', '');
                    }
                }
            }
        }
        random(1, 10);
        init = init + 10;
        if (init == 200) {
            clearInterval(abc);
            init = 10;
        }
    }, 100);

});

let btn = document.getElementById('btn');
let abcd = document.getElementById('name');
let array = [];
let optionValue = 0;
btn.addEventListener('click', () => {
    let value = abcd.value;
    if (abcd.value == '') {
        alert('You have to put a name');
    }
    else if (array == value) {
        alert('This name is already taken');
    } else if (array.length > 9) {
        alert('You can\'t choose more than 10 people.');
        abcd.value = '';
    } else {
        array.push(value);
        let option = document.createElement("option");
        option.innerText = value;
        option.classList.add("option");
        option.setAttribute('value', optionValue + 1);
        selected.appendChild(option);
        optionValue++;
        abcd.value = '';
    }
});