const a = moment.locale("ru");

const b = document.querySelectorAll(".inHour");

//Текущее время
function showUfaTime() {
    let tmp= moment().utcOffset(5).format("LT")
    document.getElementById('timeLocationUfa').innerHTML=tmp;
    let t=setTimeout('showUfaTime()',1000); /*рекурсивный вызов каждую сек. для корректировки времени*/
}
showUfaTime(); /*выполняем ф-ю вывода времени*/

//Москва
function showMscTime() {
    let tmp= moment().utcOffset(3).format("LT");
    document.getElementById('timeLocationMsc').innerHTML=tmp;
    let t=setTimeout('showMscTime()',1000); 
}
showMscTime();

//Омск
function showOmskTime() {
    let tmp= moment().utcOffset(6).format("LT");
    document.getElementById('timeLocationOmsk').innerHTML=tmp;
    let t=setTimeout('showOmskTime()',1000);
}
showOmskTime(); 

//Кемерово
function showKemTime() {
    let tmp= moment().utcOffset(7).format("LT");
    document.getElementById('timeLocationKem').innerHTML=tmp;
    let t=setTimeout('showKemTime()',1000);
}
showKemTime(); 

//Иркутск
function showIrkTime() {
    let tmp= moment().utcOffset(8).format("LT");
    document.getElementById('timeLocationIrk').innerHTML=tmp;
    let t=setTimeout('showIrkTime()',1000);
}
showIrkTime(); 

//Чита
function showChitTime() {
    let tmp= moment().utcOffset(9).format("LT");
    document.getElementById('timeLocationChita').innerHTML=tmp;
    let t=setTimeout('showChitTime()',1000);
}
showChitTime();

//Хабаровск
function showKhabTime() {
    let tmp= moment().utcOffset(10).format("LT");
    document.getElementById('timeLocationKhab').innerHTML=tmp;
    let t=setTimeout('showKhabTime()',1000);
}
showKhabTime(); 

//Магадан
function showMagTime() {
    let tmp= moment().utcOffset(11).format("LT");
    document.getElementById('timeLocationMag').innerHTML=tmp;
    let t=setTimeout('showMagTime()',1000);
}
showMagTime(); 

//Камчатка
function showKamchTime() {
    let tmp = moment().utcOffset(12).format("LT");
    document.getElementById('timeLocationKamch').innerHTML=tmp;
    let t=setTimeout('showKamchTime()',1000);
}
showKamchTime();


