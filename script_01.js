
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart 
3. Fkt. Grundrechenarten 
4. Ausgabe in Konsole : check!
*/


// Modul: Addition a + b | Test:
ausgabe(addieren(2,1));
function addieren(a,b) {
    //const c = a + b;
    //return c; zu lang und komplex
    return a + b;
}

// Modul: Konsolenausgabe | Test:
//ausgabe("Hallo Welt!");
//ausgabe(20);
function ausgabe(outputStr) {
    console.log(outputStr);
}