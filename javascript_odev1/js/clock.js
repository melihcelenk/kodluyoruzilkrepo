

function showTime(){

    const bugun = new Date();
    let saat = bugun.getHours();
    let dakika = bugun.getMinutes();
    let saniye = bugun.getSeconds();
    let gun = bugun.getDay();
    let gunAdi;
    switch (gun){
        case 1:
            gunAdi = 'Pazartesi';
            break;
        case 2:
            gunAdi = 'Salı';
            break;
        case 3:
            gunAdi = 'Çarşamba';
            break;
        case 4:
            gunAdi = 'Perşembe';
            break;
        case 5:
            gunAdi = 'Cuma';
            break;
        case 6:
            gunAdi = 'Cumartesi';
            break;
        case 0:
        case 7:
            gunAdi = 'Pazar';
            break;
    }

    document.getElementById('myClock').innerHTML = `${saat < 10 ? '0':''}${saat}:${dakika < 10 ? '0':''}${dakika}:${saniye < 10 ? '0':''}${saniye} - ${gunAdi}`

    setTimeout(showTime, 1000)
}
showTime();