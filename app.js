const  form=document.querySelector('#task-form'),
        task=document.getElementById('task'),     
        ul=document.querySelector('ul'),
        clearBtn=document.getElementById('clearBtn'),
        filter=document.getElementById('filter');


//get task from local storage



document.addEventListener('DOMContentLoaded',_=>{
    let tasks;
    if(localStorage.getItem('tasks')===null){tasks=[]
    } else{
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(j=>{
        const li=document.createElement('li');
        li.className='collection-item';
        li.appendChild(document.createTextNode(j));
        const a=document.createElement('a');
         a.className='delete-item secondary content';
         const i=document.createElement('i');
          i.className='fa fa-remove';
         li.appendChild(a);
         li.appendChild(i);
         ul.appendChild(li);
    })
});




// submit new task        
           

form.addEventListener('submit',(e)=>{
    if(task.value===''){alert('Add a task')
} else{
    const  li=document.createElement('li');
     li.className='collection-item';
    li.appendChild(document.createTextNode(task.value));
    const a=document.createElement('a');
         a.className='delete-item secondary content';
    const i=document.createElement('i');
    i.className='fa fa-remove';
    li.appendChild(a);
    li.appendChild(i);
    ul.appendChild(li);
    storeTaskInLocalStorage(task.value)
     task.value='';
      }
    e.preventDefault();
});


// Store Task in local storage

let storeTaskInLocalStorage=i=>{
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    } else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(i);
    localStorage.setItem('tasks',JSON.stringify(tasks));
};








// remove task


ul.addEventListener('click',(e)=>{
if(e.target.className='fa-remove'){
    e.target.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement)
}
});




//remove task from local storage function


let removeTaskFromLocalStorage=i=>{
  let tasks;
  tasks=JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((j,index)=>{
    if(i.textContent===j){
        tasks.splice(index,1);
    }
});
localStorage.setItem('tasks',JSON.stringify(tasks))
};






// clear task

clearBtn.addEventListener('click',()=>{
    // ul.innerHTML='';

    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
      };
      localStorage.clear();
});




// filter task

filter.addEventListener('keyup',(e)=>{
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(i=>{
        const item=i.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            i.style.display='block'
        } else{
            i.style.display='none'
        }
    }
    );
})


