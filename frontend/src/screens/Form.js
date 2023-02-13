import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap';
import FormContainer from '../component/FormContainer';
import { createSupporter } from '../action/supportersAction';

const Supporters = () => {
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [address, setAddress] = useState('')
    const [task, setTask] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    
   

    function submitHandler(e) {
        e.preventDefault();
        const newSupporter = {
            name,
            address,
            task,
            contact,
            email,
            
        }

        dispatch(createSupporter(newSupporter))
    }



  return (
    <div>
      
      <FormContainer >
      <Card style={{ width: '30rem', height: '20rem' }}>
      <Card.Body>
      <Card.Title><b><u>ADD SUPPORTER FORM</u></b></Card.Title>
      <form >
        <label>Full Name :</label>
        <input type='text' onChange={(e)=> setName(e.target.value)} /><br/><br/>
        <label>Address :</label>
        <input type='text' onChange={(e) => setAddress(e.target.value)}/><br/><br />
        <label>Task :</label>
        <input type='text' onChange={(e) => setTask(e.target.value)}/><br/><br />
        <label>Contact :</label>
        <input type="number" onChange={(e) => setContact(e.target.value)}/><br/><br/>
        <label>Email Address :</label>
        <input type="string" onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <button type='submit' style={{ backgroundColor : "blue" }} onClick={submitHandler}>ADD SUPPORTER</button>
      </form>
      </Card.Body>
      </Card>
    </FormContainer>
    
    </div>
  )
}

export default Supporters;
