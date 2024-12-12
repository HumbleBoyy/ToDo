// Selected Items First
let elTodoForm = document.querySelector(".todo_form")
let elTodoInput = document.querySelector(".todo_input")
let elTodoList = document.querySelector(".todo_list")
let elAddandUpdateBtn = document.querySelector(".btn_update")
let elBtnWrappers = document.querySelector(".btn_wrappers")


// Selected Items Second
let isEdit = false
let editedId = null
let todosList = JSON.parse(localStorage.getItem("todos")) || [];

//  Submit form data
elTodoForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    if(isEdit){
        const findObj = todosList.find(item => item.id === editedId)
        findObj.taskTitle = elTodoInput.value
    }else{
        const data = {
            id:todosList.length + 1,
            taskTitle: elTodoInput.value,
            isCompleted: false
        }
        todosList.push(data)
    }
    event.target.reset()
    location.reload()
    renderTodos(todosList, elTodoList)
    localStorage.setItem("todos", JSON.stringify(todosList))
})
renderTodos(todosList, elTodoList)


// Render Todos Data
function renderTodos(arr, list){
    list.innerHTML = null
    arr.map((item,index)=> {
        let elItem = document.createElement("li")
        elItem.className = `flex justify-between bg-white mt-2  w-[600px] p-5  mx-auto rounded-md  items-center text-[1.7rem] ${item.isCompleted ? "bg-gray-800 line-through text-white" : ""}`
        elItem.innerHTML = `
            <div class="flex items-cente gap-2 text-[2.2rem] text-ellipsis overflow-hidden">
                <span>${index + 1}) </span>
                <strong class="truncate">${item.taskTitle}</strong>
             </div>
             <div class="flex justify-between items-center gap-7">
                 <button onclick="handleCheck(${item.id})" title="Check"><i class="todo_check fa-solid fa-circle-check text-[2.5rem] ${item.isCompleted ? "text-green-600" : ""}"></i></button>
                 <button ${item.isCompleted ? "disabled" : ""} onclick="handleEdit(${item.id})" title="Edit"><i class="fa-solid fa-pen-to-square text-[2.5rem] text-blue-600"></i></button>
                 <button onclick="handleDelete(${item.id})" title="Delete"><i class="delete_btn fa-regular fa-trash-can text-[2.5rem] text-red-600"></i></button>
             </div>
        `
        list.append(elItem)
    })
    elBtnWrappers.firstElementChild.children[0].textContent = todosList.length
    elBtnWrappers.children[1].children[0].textContent = todosList.filter(item => item.isCompleted === true).length
    elBtnWrappers.lastElementChild.children[0].textContent = todosList.filter(item => item.isCompleted !== true).length
}



// Edit Button Function
function handleEdit(id){
    const findObj = todosList.find(item => item.id === id)
    elTodoInput.value = findObj.taskTitle
    isEdit = true
    editedId = id
}

// Delete Button Function
function handleDelete(id){
    const deleteItem = todosList.findIndex(item => item.id === id)
    todosList.splice(deleteItem, 1)
    renderTodos(todosList, elTodoList)
    localStorage.setItem("todos", JSON.stringify(todosList))
}


// Checked Button Function
function handleCheck(id){
    const checkedItem = todosList.find(item => item.id === id)
    checkedItem.isCompleted = !checkedItem.isCompleted
    renderTodos(todosList, elTodoList)
    localStorage.setItem("todos", JSON.stringify(todosList))
}

elBtnWrappers.addEventListener("click", (e)=> {
    if(e.target.matches(".all_done_btn")){
       const isCompleted = todosList.filter(item => item.isCompleted)
       renderTodos(isCompleted, elTodoList)

    }else if (e.target.matches(".all_uncompleted_btn")){
        const isUnCompleted = todosList.filter(item => !item.isCompleted)
        renderTodos(isUnCompleted, elTodoList)
    }else{
        renderTodos(todosList, elTodoList)
    }
})