//DOM Elements
const addTask = document.getElementById("add-btn");
const delTask = document.getElementById("del-btn");
const inputTask = document.getElementById("input");
const taskDiv = document.querySelector(".tasks");



//Events
addTask.addEventListener("click" , ()=>{    
   
     let task = document.createElement("div");
     task.className = "task";
     task.innerHTML = `<p>${inputTask.value}</p>
                        <div>
                            <button class="check"><i class="fa-solid fa-circle-check"></i></button>
                            <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    `;

    if(!inputTask.value){
        alert("Enter Something")
    }else{
         taskDiv.appendChild(task);
    }

    inputTask.value = "";

     const check = document.querySelector(".check");
     const trash = document.querySelector(".trash");

    check.addEventListener("click", ()=>{
        check.parentElement.previousElementSibling.classList.toggle("linethrough");
    })
    
    trash.addEventListener("click" , (e)=>{
        e.target.parentElement.parentElement.parentElement.remove();
    })

});




