let todoListDOM = document.querySelector('#list')

let alertDOM = document.querySelector('#alert')


const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


let maddeler = [];
if(localStorage.getItem("todolist")){
    maddeler = JSON.parse(localStorage.getItem("todolist"));
}



function newElement(){
    let yeni = document.getElementById("task").value;
    maddeler.push(yeni)
    maddeler.length % 2 === 0 ? ekle(1,yeni) : ekle(0,yeni)
    localStorage.setItem("todolist", JSON.stringify(maddeler));
    document.getElementById("task").value = "";
    $('#liveToast').toast('show')
}

maddeler.forEach(listele)

function listele(item, index, arr){
    ekle(index, item);
}

function ekle(index, item){
    let liDOM = document.createElement('li')

    if(index%2 === 0){
        liDOM.classList.add('list-group-item')
    }
    else{
        liDOM.classList.add('list-group-item', 'list-group-item-secondary')
    }
    liDOM.innerHTML = `${item} <button type="button" onclick="sil(${index})" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>`
    todoListDOM.append(liDOM)

}

function sil(index){
    maddeler.splice(index,1);
    localStorage.setItem("todolist", JSON.stringify(maddeler));
    while (todoListDOM.firstChild) {
        todoListDOM.removeChild(todoListDOM.firstChild);
    }
    maddeler.forEach(listele)
    
}