import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './slices/userSlice';



//Why we are use redux method it is global state management that purpose we are used redux 
function Home() {
    const [form,setForm] = useState({
        name:"",
        age:"",
        email:"",
        contact:""
    });

    function handleEvent(event){
        const {name,value}=event.target;
        // console.log(name,value)
        setForm((current)=>{
            return{
                ...current,
                [name]:value,
            };
        });
        // console.log(form)
    }

    // const user = useSelector((state)=>state.usersInfo.users);
    // console.log(user)
    const dispatch = useDispatch();
    function addUser(e){
        e.preventDefault();
        dispatch(setUsers(form))

        setForm({
            name:"",
            age:"",
            email:"",
            contact:""
        })
    }

  return (
    <div>
        <form>
            <label>Name</label>
            <br />
            <input type="text" name='name' value={form.name} onChange={handleEvent} />
            <br />
            <label>Age</label>
            <br />
            <input type="number" name='age' value={form.age} onChange={handleEvent}/>
            <br />
            <label>Email</label>
            <br />
            <input type="text" name='email' value={form.email} onChange={handleEvent}/>
            <br />
            <label>Contact</label>
            <br />
            <input type="number" name='contact' value={form.contact} onChange={handleEvent}/>
            <br />
            <button type="button" onClick={addUser}>Add</button>
        </form>
    </div>
  )
}

export default Home;