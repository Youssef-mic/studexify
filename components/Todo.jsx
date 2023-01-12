import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { Trash2 } from "react-feather";

function Todo({ setCoins }) {
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        isChecked: false
    });
    const [todos, setTodos] = useState([]);
    const [disabled, setDisabled] = useState(false);
    function Delete(id){
        const removeItem = todos.filter(task => {
            return task.id !== id;
          });
          setTodos(removeItem);
    }
    return (
        <div>
            <form action="" className="flex">
                <input type="text" placeholder="Enter Todo" className="rounded-full bg-ultradark ml-28 p-2 w-48" value={todo.text} onChange={e => setTodo({
                    id: nanoid(),
                    text: e.target.value,
                })}/>
                <button className="bg-ultradark rounded-2xl p-3 py-2 text-mf ml-3" onClick={
                    e => {
                        e.preventDefault();
                        setTodos([
                            ...todos,
                            todo
                        ])
                        setTodo({
                            id: "",
                            text: "",
                        })
                    } 
                }>Add</button>
            </form>
            <ul>
                    {todos.map(task => <li key={task.id} className="ml-32 mt-7"><span className="flex"><input type="checkbox" className="p-3 form-checkbox rounded-full text-notifications mr-2 -mt-1" value={task.isChecked} disabled={disabled} onChange={e => {
                        setTodo({
                            isChecked: true
                        })
                        if (e.target.checked == true) {
                            setCoins(prev => prev + 20)
                            setDisabled(true)
                        }
                    }}/><span className="-mt-[0.4rem] mr-28 text-lg">{task.text}</span><Trash2 size={22} onClick={() => Delete(task.id)}/></span><hr className="mt-2 w-56"/></li>)
                }
            </ul>
        </div>
     );
}

export default Todo;