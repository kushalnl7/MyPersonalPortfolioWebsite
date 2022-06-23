$(document).ready(function () {
 
    $('ul.navbar-nav > li')
            .click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});

function showmoreprojects() {
    // let x = document.getElementsByClassName("col");
    const boxes = document.querySelectorAll('.custom-col');
   

    for (let i = 2; i < boxes.length; i++) {
        boxes[i].style.display = 'block';
      }

    document.getElementById("more-projects").style.display = 'none';
    document.getElementById("less-projects").style.display = 'block';
}

function showlessprojects() {
    const boxes = document.querySelectorAll('.custom-col');
    for (let i = 2; i < boxes.length; i++) {
        boxes[i].style.display = 'none';
      }

    document.getElementById("less-projects").style.display = 'none';
    document.getElementById("more-projects").style.display = 'block';
}

function showmorejourney() {
    // let x = document.getElementsByClassName("col");
    const boxes = document.querySelectorAll('.custom-col-journey');
   

    for (let i = 2; i < boxes.length; i++) {
        boxes[i].style.display = 'block';
      }

    document.getElementById("more-journey").style.display = 'none';
    document.getElementById("less-journey").style.display = 'block';
}

function showlessjourney() {
    const boxes = document.querySelectorAll('.custom-col-journey');
    for (let i = 2; i < boxes.length; i++) {
        boxes[i].style.display = 'none';
      }

    document.getElementById("less-journey").style.display = 'none';
    document.getElementById("more-journey").style.display = 'block';
}