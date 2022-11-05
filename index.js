var num1 = Math.floor(Math.random() * 6 + 1);
var num2 = Math.floor(Math.random() * 6 + 1);

function checkScore() {
    document.querySelector(".span1").innerHTML = `<img src='/images/dice${num1}.png' class="img-fluid"></img>`;
    document.querySelector(".span2").innerHTML = `<img src='/images/dice${num2}.png' class="img-fluid"></img>`;
    if (num1 > num2) {
        document.querySelector(".Winmsg1").innerHTML = "Winner";
    }
    else if (num1 < num2) {
        document.querySelector(".Winmsg2").innerHTML = "Winner";
    }
    else {
        document.querySelector(".tied").innerHTML = "Match Tied ! Please, try again.";
    }
    setTimeout(function () {
        document.location.reload();
    }, 2000);
}

