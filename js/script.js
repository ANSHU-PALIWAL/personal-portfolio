/* =========typing animation========== */
var typed = new Typed(".typing", {
    strings: ["", "web designer", "web developer", "graphic designer", "youtuber"],
    typeSpeed: 200,
    bacKSpeed: 50,
    loop: true
})


// preloader js
setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1500);


// back to top
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// cursor animation
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

