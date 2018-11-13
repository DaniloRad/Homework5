function main() {
var convert = document.getElementById("ConvertInArab");
convert.addEventListener("click", ConvertInArab);
var oppositconvert = document.getElementById("ConvertInRoman");
oppositconvert.addEventListener("click", ConvertInRoman);

function ConvertInRoman() {

    var vtc = document.getElementById("ArabValue");
    var array = vtc.value.split("");
    var result = "";
    var array2 = [0, 0, 0, 0];

    //dodam 0 naprijed zbg lakoce
    for (let i = 0; i < array.length; i++) {

        array2[4 - array.length + i] = array[i];

    }

    //dodam M na pocetak zbg hiljada (koliko ih ima)
    for (let i = 0; i < array2[0]; i++) {


        result = result + "M";

    }

    //sad za 2 cifru odabiram slova

    switch (parseInt(array2[1])) {
        case 1:
            result = result + "C";
            break;
        case 2:
            result = result + "CC";

            break;
        case 3:
            result = result + "CCC";

            break;
        case 4:
            result = result + "CD";

            break;
        case 5:
            result = result + "D";

            break;
        case 6:
            result = result + "DC";

            break;
        case 7:
            result = result + "DCC";

            break;
        case 8:
            result = result + "DCCC";

            break;
        case 9:
            result = result + "CM";
            break;
        default:
            break;



    }

    switch (parseInt(array2[2])) {
        case 1:
            result = result + "X";
            break;
        case 2:
            result = result + "XX";

            break;
        case 3:
            result = result + "XXX";

            break;
        case 4:
            result = result + "XL";

            break;
        case 5:
            result = result + "L";

            break;
        case 6:
            result = result + "LX";

            break;
        case 7:
            result = result + "LXX";

            break;
        case 8:
            result = result + "LXXX";

            break;
        case 9:
            result = result + "XC";

            break;



    }
    switch (parseInt(array2[3])) {
        case 1:
            result = result + "I";
            break;
        case 2:
            result = result + "II";

            break;
        case 3:
            result = result + "III";

            break;
        case 4:
            result = result + "IV";

            break;
        case 5:
            result = result + "V";

            break;
        case 6:
            result = result + "VI";

            break;
        case 7:
            result = result + "VII";

            break;
        case 8:
            result = result + "VIII";

            break;
        case 9:
            result = result + "IX";

            break;



    }


    var ToExport = document.getElementById("export");
    if (parseInt(vtc.value) < 9999) {
        ToExport.innerHTML = result;

    } else {
        alert("ToNumber TRB DA JE MANJI OD 9999")
    }
}


function ConvertInArab() {
    var RomanValue = document.getElementById("RomanValue").value;
   

    RomanNumber = RomanValue.split("");

    var Sum = 0;
    //provjeravam da ne postoje 3 u redu
    var corr = true;
    for (let i = 0; i < RomanNumber.length - 1; i++) {
        if (i + 2 < RomanNumber.length) {
            if (((RomanNumber[i] === RomanNumber[i + 1]) && (ToNumber(RomanNumber[i]) < ToNumber(RomanNumber[i + 2]))) || (RomanNumber[i] === RomanNumber[i + 1]) && (RomanNumber[i] === RomanNumber[i + 2])) {
                
                corr = false;

                alert("NEISPRAVAN RomanValue!");
                break;

            }
        }

        if ((Order(RomanNumber[i], RomanNumber[i + 1]))) {

            Sum = Sum + ToNumber(RomanNumber[i]);


        } else {
            //ovo su jedine situacije kod konjih je ovo moguce
            if (((RomanNumber[i] === "C") && (RomanNumber[i + 1] === "M")) ||
                (((RomanNumber[i] === "C") && (RomanNumber[i + 1] === "D")) || (((RomanNumber[i] === "X") &&
                    (RomanNumber[i + 1] === "C")) || (((RomanNumber[i] === "X") && (RomanNumber[i + 1] === "L")) ||
                    (((RomanNumber[i] === "I") && (RomanNumber[i + 1] === "X")) || (((RomanNumber[i] === "I") &&
                        (RomanNumber[i + 1] === "V")))))))) {


                Sum = Sum - ToNumber(RomanNumber[i]);


            } else {
                alert("corr nije");

                corr = false;
                break;
            }
        }



    }
    Sum = Sum + ToNumber(RomanNumber[RomanNumber.length - 1])


    var ToExport = document.getElementById("export");
    if (corr) ToExport.innerHTML = Sum;


}
//napravimo funkciju za gledanje da li je veci manji ili jednak
function ToNumber(a) {

    var b;


    if (a === "I") {
        b = 1;

    } else if (a === "V") {
        b = 5;

    } else if (a === "X") {
        b = 10;

    } else if (a === "L") {
        b = 50;

    } else if (a === "C") {
        b = 100;

    } else if (a === "D") {
        b = 500;

    } else if (a === "M") {
        b = 1000;

    }
    return b;


}


function Order(a, b) {

    var array = ["I", "V", "X", "L", "C", "D", "M"]
    //provjrimo gdje su u nizu
    var c = array.indexOf(a);
    var d = array.indexOf(b);
    if (c >= d) {
        return true;


    } else {

        return false;
    }


}
}
main();