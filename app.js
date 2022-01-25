//Ocultar o mostrar div que contiene la lista
const hide= document.querySelector('#hideElements');
const listDiv= document.querySelector('#list');

//constantes para agregar elementos a la lista
const addItemInput=document.querySelector('#addItem');//input
const addItemButton=document.querySelector('button#addItemButton'); //Button

//Eliminar ultimo item
const removeItemButton=document.querySelector('button#removeItemButton');
//Eliminar elemento seleccionado
const removeItem=document.querySelector('button#removeItem');


//DEFINICION DE EVENTOS A BOTONES

//Mostrar y ocultar lista
hide.addEventListener('click',()=>{
    if(listDiv.style.display==='none'){
        listDiv.style.display='block';
        hide.textContent='Ocultar';
    }else{
        listDiv.style.display='none';
        hide.textContent='Mostrar';
    }
});


//Agregamos elementos a la lista
addItemButton.addEventListener('click',()=>{
    let list=document.querySelector('ul');
    let li=document.createElement('li');
    li.textContent=addItemInput.value;
    list.appendChild(li);
    addItemInput.value="";
});

//agregar elemento a la lista cuando presionamos enter
addItemInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        let list = document.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = addItemInput.value;
        list.appendChild(li); //Agregar elemento a la lista
        addItemInput.value = ""; //Limpiamos el input
    }
    
});



//Eliminar ultimo elemento de la lista
removeItemButton.addEventListener('click',()=>{
    let list=document.querySelector('ul');
    let li=document.querySelector('li:last-child');
    list.removeChild(li);
});



//ELIMINAR ELEMENTO SELECCIONADO

//eliminar mediante seleccion de objeto de la lista
function findIndex(elem){
    var i, len = items.length;
    for (i = 0; i < len; i++) {
        if (items[i] === elem) {
            return i;
        }
    }
    return -1;
}

//Obtener index del elemento seleccionado
var list=document.getElementById("listItems"),
    items = list.getElementsByTagName("li");
list.onclick=function(e){
    var event = e || window.event,
    src=event.target || event.srcElement;
    var myIndex=findIndex(src);
    //alerta para confirmar eliminacion
    index=myIndex;
    console.log(myIndex);

    if(event.target.tagName==='LI'){
        list.querySelectorAll('li').forEach(el=>el.classList.remove('alert','alert-success'));
        items[index].classList.add('alert','alert-success');
    }
};


//Eliminar elemento seleccionado
removeItem.addEventListener('click',()=>{
    let showDiv=document.getElementById('list');
    let divAlert=document.createElement('div');
    let label=document.createElement('label');
    label.innerHTML='Se elimino el elemento: '+index;
    divAlert.classList.add('alert','alert-danger');

    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);
});
