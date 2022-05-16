let users = ["Lorem", "Ipsum", "Dolor"]

const userListDOM = document.querySelector('#userList')

for(let index = 0; index < users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}



const PRODUCTS =  ["Laptop", "Phone", "Speaker", "PC", "Mic"]

PRODUCTS.forEach(product => console.log(product)) // ÖNEMLİ BİR KISA YAZIM, yeni fonksiyon oluştururken tek parametre kullanılıyor

PRODUCTS.forEach((product, index, array) => console.log(array[index] = product + "1")) // yeni fonksiyon 3 parametre ile oluşturuluyor

PRODUCTS.forEach((product, index, array) => console.log(array[index] = `${product.toUpperCase()}`)) // template literal ile kullanım

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)


const USERS = ["AYSE", "MehMET", "TuGCe"]

const NEW_USERS = USERS.map(item => ">>> " +item.toLowerCase() + " <<<")  // sadece return değeri ile kullanım

const NEW_USERS_OBJ = USERS.map(item => (
    {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
)) // sadece return değeri ile obje olarak döndürme 