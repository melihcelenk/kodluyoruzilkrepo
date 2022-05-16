let domain = "kodluyoruz"
let isActive = false
let items = [1,2,3, isActive, domain]
console.log(items)

items.push(50) // sona öğe eklemek

items.unshift(5) // başa öğe eklemek

items.pop() // sondaki öğeyi çıkarmak - son öğeyi döndürür

items.shift() // ilk elemanı çıkarmak - ilk öğeyi döndürür 

items[items.length - 1] = 1000 // son öğeyi değiştirme

let femaleUsers = ["Gözde", "Pelin", "Sena"]
let maleUsers = ["Fatih", "Efe", "Salih"]

items.unshift(femaleUsers);
items.push(maleUsers)
console.log(items)

let newItems = items.splice(1,5)

console.log(newItems)
console.log(items)

let copyItems = items.slice() // array kopyalama
copyItems = [...items] // array kopyalama başka yöntem

let allUsers = [...femaleUsers, ...maleUsers] // array birleştirme

let allUsersString = allUsers.toString() // arrayi stringe çevirme
allUsersString = allUsers.join(",") // arrayi stringe çevirme ve belli bir stringle ayırma

allUsers.splice(allUsers.length -1, 0, "Melissa") // istenilen index bilgisine öğe eklemek

const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma"); // bir öğenin array içerisinde olup olmadığını kontrol etme

//Foreach
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

document.getElementById("demo").innerHTML = numbers;

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
// --------------- Tek parametreli foreach
let sum = 0;

numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
  sum += item;
}


const sayilar = [1,2,3];

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.

console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

