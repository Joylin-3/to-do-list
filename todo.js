let task = document.getElementById('inputlist');
let addBtn = document.getElementById('addtoDo');
let lists = document.getElementById('todolists');

addBtn.addEventListener('click',function(){
    var paragraph = document.createElement('li');
    lists.appendChild(paragraph);
    paragraph.classList.add('para-style');
    if(task.value=="")
    {
    alert("Enter a task");
    lists.removeChild(paragraph);
    }
    else
    paragraph.innerHTML = task.value;
    task.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
        paragraph.classList.add('done-style');
    })
    paragraph.addEventListener('dblclick',function(){
        // paragraph.style.display="none";
        lists.removeChild(paragraph);
    })
})