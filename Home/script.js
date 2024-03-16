

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

var springValley = document.getElementById('spingsValleyLink');
var baskeball = document.getElementById('baskeballLink');


hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

springValley.addEventListener('click', function() {
    // Action for Springs Valley
    console.log("Springs Valley clicked");
    window.location.href = '../springsValley';
});

document.getElementById("explore-btn").addEventListener("click", function() {
    document.getElementById("latest-work").scrollIntoView();
});

document.getElementById("youtube-btn").addEventListener("click", function() {
    window.open("https://www.youtube.com/channel/UCo4rZiF2hUV3UQ4Qs3L-B5A", "_blank");
});

document.getElementById("github-btn").addEventListener("click", function() {
    window.open("https://github.com/DaPP-P", "_blank");
});

document.getElementById("linkedin-btn").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/daniel-prvanov-23928b1b2/", "_blank");
});


