//DOM Elements
const addTask = document.getElementById("add-btn");
const delTask = document.getElementById("del-btn");
const inputTask = document.getElementById("input");
const taskDiv = document.querySelector(".tasks");



//EVENTS
addTask.addEventListener("click" , ()=>{    
   
     let task = document.createElement("div");
     task.className = "task";
     task.innerHTML = `<p>${inputTask.value}</p>
                        <div>
                            <button class="checked"><i class="fa-solid fa-circle-check"></i></button>
                            <button class="unchecked"><i class="fa-solid fa-check-double"></i></button>
                            <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    `;

    if(!inputTask.value){
        alert("Enter Something")
    }else{
        taskDiv.appendChild(task);
    }

    inputTask.value = "";
    inputTask.focus();

     const checkeds = document.querySelectorAll(".checked");
     const uncheckeds = document.querySelectorAll(".unchecked")
     const trashes = document.querySelectorAll(".trash");

    checkeds.forEach(el => el.addEventListener("click", ()=>{
         el.parentElement.parentElement.firstElementChild.classList.add("linethrough");
    }));

    uncheckeds.forEach((c) => c.addEventListener("click", () => {
        c.parentElement.previousElementSibling.classList.remove("linethrough");
      })
    );

    trashes.forEach(el => el.addEventListener("click", (e)=>{
        e.target.parentElement.parentElement.parentElement.remove();
        inputTask.focus();
    }))     

});


inputTask.addEventListener("keydown", (e)=>{
    if(e.code == "Enter"){
        addTask.click();
    }
})

window.addEventListener("load", ()=>{
    inputTask.focus();
})




