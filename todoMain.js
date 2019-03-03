var ul=document.getElementById('lists');
document.getElementById('addBtn').addEventListener('click',addItem)
document.getElementById('rmvBtn').addEventListener('click',rmvItem)



function addItem()
{
var input=document.getElementById('todo');
var inputVal=input.value;
// create Elements 
var textNode=document.createTextNode(inputVal);


if(inputVal==='')
{
    console.log('Input Box ko empty Nhi chor skte')
    return false
}
else{

    let cb=document.createElement('input') // create checkbox
    let label=document.createElement('label')// create label
    var li=document.createElement('li'); // create list
    // set Values 
    cb.type='checkbox';
    cb.setAttribute('id','check')

  // add these Elements on web page
    ul.appendChild(label);
    ul.appendChild(li);
    li.appendChild(cb);
    ul.insertBefore(li,ul.childNodes[0]);
    label.appendChild(textNode);
    li.appendChild(label);
    setTimeout(()=>{
    li.className='visual';
    },2)
    input.value='';
    

}


}

// function to remove 
function rmvItem(){
    let liArr=ul.children;
    //console.log(liArr)
    for(let i=0; i<liArr.length;i++){
        while(liArr[i] && liArr[i].children[0].checked){
            ul.removeChild(liArr[i]);
        }
    }


}