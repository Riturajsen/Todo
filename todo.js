var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',additem);

var RemoveButton = document.getElementById('remove');
RemoveButton.addEventListener('click',RemoveTodo);


// Remove all task wether done or not

var RemoveAll = document.getElementById('removeall')
RemoveAll.addEventListener('click',RemoveAllList)



// Adding New TODO

function additem(){
 var input = document.getElementById('input');
 var item = input.value;
 ul = document.getElementById('list');
 var textnode = document.createTextNode(item)


 if(item === '') {
    return false;
    // Add a p tag and assign a value of "enter your todo"
    }
  else {
    li = document.createElement('li');
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','check');

    var label = document.createElement('label');
    label.setAttribute('for','item');

    // add in html


    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    
    ul.insertBefore(li, ul.childNodes[0]);
    
    setTimeout(() => {
        li.className = 'visual';
    }, 500);

    input.value='';
   }
}

// Removing Done TODO
function RemoveTodo(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
}

// all remove Function
function RemoveAllList(){
    for (let index = 0; index < li.length; index++) {
        ul.removeChild(li[index]);
        
    }
       
   }
