// function to display selected todo 
function displaySelectedTodo(element){
    document.getElementById('display-selected-todo').innerText = element.innerText;

}
// to view the add todo form 
document.getElementById("add-todo-button").addEventListener('click',()=>{
    document.getElementById('create-todo-form').style.display = "flex";
});
// for button to close the create todo form 
document.getElementById('close-form').addEventListener('click',()=>{
    document.getElementById('create-todo-form').style.display = "none";

})

