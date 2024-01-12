function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szam) {
    var db = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}
function fuggvenyhivasPalindrom(callback) {
    var szo = ("apa");
    callback("meghivva");
    var szavak = szo.split("");
    if (szavak == szavak.reverse()) {
        return true;
    }
    return false;
}
