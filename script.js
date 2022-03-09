var container = document.querySelector('.container');
var value1 = document.querySelector('.input');
var addd = document.querySelector('.add');

class item{
    constructor(name){
        this.create(name);
    }
    create(name){
        var lis =document.createElement('div');

        lis.classList.add('item');

        var input = document.createElement('input');
        input.type="text";
        input.disabled=true;
        input.value=name;
        input.classList.add('item_input');

        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = '<i class="fas fa-trash"></i>';
        remove.addEventListener('click', ()=>this.remove(lis))

        container.appendChild(lis);

        lis.appendChild(input);
        lis.appendChild(remove);

    }

    remove(lis){
        container.removeChild(lis);
    }
}

addd.addEventListener('click',check);

window.addEventListener('keydown',(e)=>{
        if(e.which==13){
            check();
        }
    })

function check(){
    if(value1.value!=""){
     new item(value1.value);
     value1.value="";
    }
}

function removeAll(){
    document.querySelector('.container').innerHTML="";
}