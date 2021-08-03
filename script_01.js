
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

startApp();

function startApp() {
    ausgabe(rechner(getZahl1(),getOp(), getZahl2()));
}
function getZahl1() {
    return 10;
}
function getZahl2() {
    return 4;
}
ausgabe(getOp());
function getOp() {
    return "-";
}
// Modul: Rechenart auswählen | Tests:
ausgabe(rechner(2,"+", 1));
ausgabe(rechner(2,"-", 1));
ausgabe(rechner(2,"*", 1));
ausgabe(rechner(2,"/", 1));
function rechner(a,op,b) { // a,b --> Operanden/ Operatoren: +. -, *, /
    switch (op) {
                case "+":
                return addieren(a,b);
                case "-":
                return subtrahieren(a,b);  
                case "*":
                return muliplizieren(a,b);  
                case "/":
                return dividieren(a,b);
    
        default:
        break;
    }
}


//Modul: Division a / b | Test:
// ausgabe(dividieren(10, 2));
// ausgabe(dividieren(2, 0));
function dividieren(a,b) {

    //kürzer, besser
    if(b != 0){

    return a / b;
    }
    // ausführlich
    // if(b == 0)
    // {
    return "Division durch 0 nicht OK!"
    // } else
    // {
    //     return a / b;
    // }
}

// Modul: Multiplikation a * b | Test:
//ausgabe(muliplizieren(2,1));
//ausgabe(muliplizieren(2,0));
function muliplizieren(a,b) {
    return a * b;
}

// Modul: Subtraktion a - b | Test:
//ausgabe(subtrahieren(2,1));
//ausgabe(subtrahieren(2,10));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition a + b | Test:
//ausgabe(addieren(2,1));
function addieren(a,b) {
    //const c = a + b;
    //return c; zu lang und komplex
    return a + b;
}

// Modul: Konsolenausgabe | Test:
//ausgabe("Hallo Welt!");
//ausgabe(20);
function ausgabe(outputStr) {

    // console.log(typeof outputStr);
    if (typeof outputStr === "number")/*("outputStr ist eine Zahl")*/ {
        outputStr = "Das Ergebnis ist: " + outputStr
    }

    //console.log(typeof outputStr);
    console.log(outputStr);
}