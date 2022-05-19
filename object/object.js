let obje = new Object()
// document.write(typeof(obje))

let ornekObje = {
    "2veri": 222,
    mesela: 3,
    isim: "Ali",
    soyisim: "Veli",
    tamIsim: function () { return `${this.isim} ${this.soyisim}`}
}

console.log(ornekObje["2veri"])
ornekObje.mesela = 4
ornekObje.yeniVeri = 3
console.log(ornekObje)


class Insan {
    constructor(isim, yas) {
        this.isim = isim
        this.yas = yas
    }
}

Insan.prototype.yeniFonksiyon = () => document.write("Sonradan")

let ahmet = new Insan("Ahmet", 12)
ahmet.yeniFonksiyon();

let {"2veri":veri, mesela, isim: ad, soyisim: soyad, tamIsim} = ornekObje; // birçok değişkene parçalayarak atama - değişken isimleri ":" ile değiştiriliyor
document.write(ad)

let {isim, ...digerOzellikler} = ornekObje;

document.write(isim)
document.write(digerOzellikler.soyisim)

let digerOzellikler2 = {...digerOzellikler} // kopyalama (diğer türlü referans gönderir)

let score = [100, 200, 300, 400]
let [score1, score2, ...otherScores] = score

let copyOfScore = [...score]

