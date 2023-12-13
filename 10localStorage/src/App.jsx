import { useEffect, useState } from 'react'
import { TodoProvider } from './context'


function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo) =>{
           setTodos((prev)=> [{id : Date.now(), ...todo} , ...prev])
  }

  const updatedTodo = (id , todo) => {
       setTodos((prev)=> prev.map((prevtodo)=> (prevtodo.id === id ? todo :prevtodo)))
  }

  const deletedTodo = (id)=> {
            setTodos((prev)=> prev.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
       setTodos((prev) => prev.map((prevtodo) => prevtodo === id ? {...prevtodo , completed: !prevtodo.completed } : prevtodo))
  }


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
  },[])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])



  return (
  <TodoProvider value={{todos ,addTodo ,updatedTodo , deletedTodo , toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
        </div>
    </div>
</div>
</TodoProvider>
  )
}

export default App