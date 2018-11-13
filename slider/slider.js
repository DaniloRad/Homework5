function main() {
    var InOrOut = false;
    var $ = function (name) {
        console.log("eo")
        return document.getElementsByClassName(name)[0];
    }
    var leftslider = $("left");
    leftslider.addEventListener("click", goleft);
    var rightslider = $("right");
    rightslider.addEventListener("click", goright);
    var ListaSlika = document.getElementsByClassName("pics-list")
    var pics = document.getElementById("pics");
    pics.addEventListener("click", fullscreen);
    var button = $("button");
    button.addEventListener("click", closee);
    var child = $("child");
    child.addEventListener("mouseover", In);
    child.addEventListener("mouseout", Out);
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("keydown", onarrows);

    function In() {
        InOrOut = true;
    }

    function Out() {
        InOrOut = false;
    }

    function closee() {
        child.style.height = "40%";
        child.style.width = "70%";
        button.style.display = "none";

    }

    function fullscreen() {
        button.style.display = "block";
        child.style.height = "90vh";
        child.style.width = "90vw";


    }

    function onarrows(e) {

        var test = $("child");
        if (InOrOut) {
            console.log("eo")

            if (e.keyCode === 37) {
                goleft();
            } else if (e.keyCode === 39) {
                goright();
            }
        }
    }










    var cnt = 0;

    function goleft() {
        ListaSlika[cnt].style.display = "none";

        cnt--;
        if (cnt === -1) {
            cnt = ListaSlika.length - 1;
        }
        ListaSlika[cnt].style.display = "block";


    }

    function goright() {
        ListaSlika[cnt].style.display = "none";

        cnt++;
        if (cnt === ListaSlika.length) {
            cnt = 0;
        }
        ListaSlika[cnt].style.display = "block";


    }
}
main.call();