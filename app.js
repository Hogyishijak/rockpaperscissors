const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const ani = document.getElementById('ani');
const all = document.getElementsByClassName('btn');
const report = document.getElementById('report');
const userP = document.getElementById('userP');
const compP = document.getElementById('compP');
let userChoice = 0;
let compC = 0;
let user = 0;
let comp = 0;


function winner() {
    choice(rock, 0, "img/rock.svg", 'imgUserInAni', 'Uia');
    choice(paper, 1, "img/paper.svg", 'imgUserInAni', 'Uia');
    choice(scissors, 2, "img/scissors.svg", 'imgUserInAni', 'Uia');
}

function choice(what, num, svg, imgUserOrCompInAniString, Uia) {
    what.addEventListener('click', function() {
        userChoice = num
        elementCreate(svg, imgUserOrCompInAniString, Uia);
        compChoice();
        console.log(userChoice + " " + compC);
        ifs();
        score();

    })
}

function score() {
    userP.innerHTML = user;
    compP.innerHTML = comp;
}

function elementCreate(svg, imgUserOrCompInAniString, Uia) {
    for (let i = 0; i < 1; i++) {
            let img = document.createElement('img');
            img.src = svg;
            img.setAttribute('id', imgUserOrCompInAniString);
            img.classList.add(Uia);
            ani.appendChild(img); 
            for (let k = 0; k<all.length; k++) {
            all[k].style = "display: none";
            setTimeout(function() {
                all[k].style = "display: block";
            }, 1500)
            }
            setTimeout(function () {
                let userInAni = document.getElementById(imgUserOrCompInAniString);
                userInAni.parentNode.removeChild(userInAni);
            }, 2000)

    }

}

function compChoice() {
    compC = Math.floor(Math.random() * 3);
    if (compC === 0) {
        elementCreate('img/rock.svg', 'imgCompInAni', 'Cia')
    } else if (compC === 1) {
        elementCreate('img/paper.svg', 'imgCompInAni', "Cia") 
    } else if (compC === 2) {
        elementCreate('img/scissors.svg', 'imgCompInAni', 'Cia')
    }

}

function ifs() {
    if (userChoice === 0 && compC === 0) {
        console.log("Tie!");
        report.innerHTML = "Tie!";
    } else if (userChoice === 1 && compC === 1) {
        console.log("Tie!");
        report.innerHTML = "Tie!";
    } else if (userChoice === 2 && compC === 2) {
        console.log("Tie!");
        report.innerHTML = "Tie!";
    } else if (userChoice === 0 && compC === 1) {
        comp += 1;
        console.log("The Computer Won! " + comp);
        report.innerHTML = "The Computer Won!";
    }else if (userChoice === 0 && compC === 2) {
        user += 1;
        console.log("You won!" + user);
        report.innerHTML = "You Won!";
    }else if (userChoice === 1 && compC === 0) {
        user += 1;
        console.log("You won!" + user);
        report.innerHTML = "You Won!";
    }else if (userChoice === 1 && compC === 2) {
        comp += 1;
        console.log("The computer won!" + comp);
        report.innerHTML = "The Computer Won!";
    }else if (userChoice === 2 && compC === 0) {
        comp += 1;
        console.log("The computer won!" + comp);
        report.innerHTML = "The Computer Won!";
    }else if (userChoice === 2 && compC === 1) {
        user += 1;
        console.log("You won!" + user);
        report.innerHTML = "You Won!";
    }

}

score();
winner();


const text = document.getElementById('h1');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;

}