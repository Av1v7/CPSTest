document.addEventListener('DOMContentLoaded', function () {
    const oneSecondBtn = document.getElementById('oneSecondBtn');
    const tenSecondsBtn = document.getElementById('tenSecondsBtn');
    const twentySecondsBtn = document.getElementById('twentySecondsBtn');
    const fiftySecondsBtn = document.getElementById('fiftySecondsBtn');

    function StartGame(Time) {
        window.location.href = `gameScene.html?time=${Time}`;
    };

    document.body.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    document.getElementById('discordLink').addEventListener('click', function () {
        chrome.tabs.create({ url: 'https://discord.com/users/921094593393618974/' });
    });

    document.getElementById('githubLink').addEventListener('click', function () {
        chrome.tabs.create({ url: 'https://github.com/Av1v7' });
    });

    oneSecondBtn.addEventListener('click', function () {
        StartGame(1);
    });

    tenSecondsBtn.addEventListener('click', function () {
        StartGame(10);
    });

    twentySecondsBtn.addEventListener('click', function () {
        StartGame(20);
    });

    fiftySecondsBtn.addEventListener('click', function () {
        StartGame(50);
    });
});
