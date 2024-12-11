let elTodoForm = document.querySelector(".todo_form")
let elTodoInput = document.querySelector(".todo_input")
let elTodoList = document.querySelector(".todo_list")

let todosList = []


elTodoForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    const data = {
      id:todosList.length + 1,
      taskTitle: elTodoInput.value
    }

    todosList.push(data)
   renderTodos(todosList, elTodoList)
   event.target.reset()
})

function renderTodos(arr, list){
    list.innerHTML = ""
    arr.map((item,index)=> {
        let elItem = document.createElement("li")
        elItem.className = "flex justify-between bg-white mt-2  w-[600px] p-5  mx-auto rounded-md items-center text-[1.7rem]"
        elItem.innerHTML = `
            <div class="flex items-cente gap-2 text-[2.2rem] text-ellipsis overflow-hidden">
                <span>${index + 1}) </span>
                <strong class="truncate">${item.taskTitle}</strong>
             </div>
             <div class="flex justify-between items-center gap-7">
                 <button title="Delete"><i class="fa-solid fa-circle-check text-[2.5rem] text-green-600"></i></button>
                 <button title="Delete"><i class="fa-solid fa-pen-to-square text-[2.5rem] text-blue-600"></i></button>
                 <button title="Delete"><i class="fa-regular fa-trash-can text-[2.5rem] text-red-600"></i></button>
             </div>
        `
        list.append(elItem)
    })
}