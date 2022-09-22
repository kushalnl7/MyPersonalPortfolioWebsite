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
    document.getElementById('project').scrollIntoView();
}

function showmorejourney() {
    // let x = document.getElementsByClassName("col");
    const boxes = document.querySelectorAll('.custom-col-journey');
   

    for (let i = 2; i < boxes.length; i++) {
        boxes[i].style.display = 'block';
      }

    const x = document.querySelectorAll('.timeline-item');
    x[1].style.marginBottom = '40px';

    document.getElementById("more-journey").style.display = 'none';
    document.getElementById("less-journey").style.display = 'block';
}

function showlessjourney() {
    const boxes = document.querySelectorAll('.custom-col-journey');
    for (let i = 2; i < boxes.length; i++) {
        boxes[i].style.display = 'none';
      }

    const x = document.querySelectorAll('.timeline-item');
    x[1].style.marginBottom = '0px';

    document.getElementById("less-journey").style.display = 'none';
    document.getElementById("more-journey").style.display = 'block';
    document.getElementById('journey').scrollIntoView();
}

function sendEmail() {
    Email.send({
      Host: "smtp.mailtrap.io",
      Username: "webdevkl7@gmail.com",
      Password: "Pati@1170234",
      To: 'receiver@email_address.com',
      From: "webdevkl7@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


function Submit(){
    let x = document.getElementById("myForm");
    let check = 0;
    if(x.name.value == "") check=check+1;
    if(x.email.value == "") check=check+1;
    if(!validateEmail(x.email.value)) check=check+1;
    if(x.subject.value == "") check=check+1;
    if(x.message.value == "") check=check+1;
    // if(check != 0) return 0;
    sendEmail();

}

window.addEventListener("#project", function () {
    window.scrollTo(window.scrollX, window.scrollY - 500);
});