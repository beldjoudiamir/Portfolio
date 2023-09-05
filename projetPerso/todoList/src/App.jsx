import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './Components/ListItem'
import './App.css'

function App() {

  const [todoList, setTodoList] = useState([
    {id: nanoid(3), content: "Café"},
    {id: nanoid(3), content: "Sucre"}
  ])

  //console.log(todoList);

  const [todo, setTodo] = useState("");
  const [ShowValidation,setShowValidation] = useState(false);

  

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))

  }

  function handleSubmit(e){
    e.preventDefault()

    if (todo === "") {

      setShowValidation(true)
      return
    }

    setTodoList([...todoList, {id:nanoid(),content:todo}])

    setTodo("")

    setShowValidation(false)
  }



  return (

    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
      <h1 className=" text-slate-100 mb-4 text-3xl">To-do Liste</h1>
      <form className="mb-10" onSubmit={handleSubmit}>
        <label htmlFor="todo-item" className="text-slate-50"> Ajouter une chose à faire</label>
        <input 
            type="text" 
            className=" block w-full rounded mt-1" 
            value={todo}
            onChange={ e => setTodo(e.target.value)}
          />
        <button className=" mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]" >Ajouter</button>
        {ShowValidation && (
          <p className=" text-red-400 pt-5">Ajouter d'abord du contenu à votre a votre tache !!!</p>
        )}
      </form>

        <ul> 
          {todoList.length === 0 && (
            <li className=" text-slate-50  ">Pas d'items à afficher...</li>
          )}
          {todoList.length > 0 && todoList.map(item => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}

          </ul>
      </div>
    </div>
  )
}

export default App
