document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    document.querySelector('button').addEventListener('click', addTask);

    function addTask() {
        if(inputBox.value.trim() === ''){
            window.alert("You must write something!");
            return;
        }
        let li = document.createElement("li");
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        
        li.innerHTML = inputBox.value;
        li.appendChild(span);
        
        listContainer.appendChild(li);
        inputBox.value = '';
    }

    inputBox.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }, false);
});