function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];
    for (var i: number = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}



function parosDarab(szam: number[]): number {
    var db: number = 0;

    for (var i: number = 0; i < szam.length; i++) {
        if (szam[i] % 2 == 0) {
            db++;
        }
    }

    return db;
}



function fuggvenyhivasPalindrom(callback) {
    var szo: string = ("apa");

    callback("meghivva");

    var szavak = szo.split("");

    if (szavak == szavak.reverse()) {
        return true;
    }
    return false;

}
