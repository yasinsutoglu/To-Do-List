//DOM Elements
const addTask = document.getElementById("add-btn");
const delTask = document.getElementById("del-btn");
const inputTask = document.getElementById("input");
const body = document.querySelector("body")
const container = document.querySelector(".container")


//EVENTS
//add button event
addTask.addEventListener("click" , ()=>{ 
    
    // console.log(document.querySelector("body").children)
    const taskDiv = document.querySelector(".tasks"); 
   
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
        e.target.parentElement.parentElement.parentElement.remove(); // removing task element done
        inputTask.focus();
    }))     

});

//Inserting an element after an element
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//complete deletion
delTask.addEventListener("click", ()=>{
    if(document.querySelector(".container").nextElementSibling.classList.contains("tasks")){
        let tasks = document.querySelector(".tasks");
        tasks.remove();
    }else{
        alert("There is no one to erased!")         
            let taskDiv = document.createElement("div");
           taskDiv.className = "tasks";
           insertAfter(taskDiv,container)
           inputTask.focus();        
    }    
})

//Input keydown Event
inputTask.addEventListener("keydown", (e)=>{
    if(e.code == "Enter"){
        addTask.click();
    }else if(e.code == "Delete"){
        delTask.click();
    }
})

//browser window load event
window.addEventListener("load", ()=>{
    inputTask.focus();
})




