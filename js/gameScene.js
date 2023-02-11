const urlParams = new URLSearchParams(window.location.search);
const timeLimit = parseInt(urlParams.get('time'));
const instructions = document.querySelector('.instructions');
const clickCount = document.querySelector('.click-count');
const clickArea = document.querySelector('.click-area');
const timerDisplay = document.querySelector('.timer');
const gotoStartSceneBtn = document.querySelector('#GotoStartScene');
const retryBtn = document.querySelector('#Retry');

document.body.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

document.getElementById('discordLink').addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://discord.com/users/921094593393618974/' });
});

document.getElementById('githubLink').addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://github.com/Av1v7' });
});

gotoStartSceneBtn.addEventListener('click', function () {
    window.location.href = `/html/startScene.html?`;
});

retryBtn.addEventListener('click', function () {
    window.location.reload();
});

let clicks = 0;
let timer = timeLimit;
let countdown;

instructions.innerText = `Click the button as fast as you can for ${timeLimit} seconds`;

clickArea.addEventListener('click', function () {
    if (!countdown) {
        countdown = setInterval(function () {
            timer -= 0.01;
            timerDisplay.innerText = `Timer: ${timer.toFixed(2)}`;
            if (timer <= 0) {
                clearInterval(countdown);
                clickArea.style.display = 'none';
                instructions.innerText = `Your score: ${clicks}`;
                timerDisplay.innerText = `Cps: ${(clicks / timeLimit).toFixed(2)}`

                gotoStartSceneBtn.setAttribute("disabled", true);
                retryBtn.setAttribute("disabled", true);
                let count = 0.5;
                let countdownInterval = setInterval(function () {
                    gotoStartSceneBtn.innerText = `Disabled: ${count.toFixed(2)}`;
                    retryBtn.innerText = `Disabled: ${count.toFixed(2)}`;
                    count -= 0.01;
                    if (count < 0) {
                        clearInterval(countdownInterval);
                        gotoStartSceneBtn.removeAttribute("disabled");
                        retryBtn.removeAttribute("disabled");
                        gotoStartSceneBtn.innerText = "Go Home";
                        retryBtn.innerText = "Play Again";
                    }
                }, 10);
            }
        }, 10);
    }
    clicks++;
    clickCount.innerText = clicks;
});