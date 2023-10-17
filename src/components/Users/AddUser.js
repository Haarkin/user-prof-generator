import React from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    
  const [enteredUsernameValue, setEnteredUsernameValue] = useState('');
  const [enteredAgeValue, setEnteredAgeValue] = useState(''); 
  const [isValid, setIsValid] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsernameValue.trim().length === 0 || enteredAgeValue.trim().length === 0) {
            setIsValid({
                title: 'Invalid input',
                message: 'Empty values are prohibited'
            })
            return
        };
        if (+enteredAgeValue < 1) {
            setIsValid({
                title: 'Invalid age',
                message: `Unborn human beings are prohibited, Mr. ${enteredUsernameValue}`
            })
            return
        }
        props.onAddUser(enteredUsernameValue, enteredAgeValue)
        setEnteredUsernameValue('');
        setEnteredAgeValue('');
    }

    const addUsernameHandler = (event) => {
        setEnteredUsernameValue(event.target.value)
    }

    const addAgeHandler = (event) => {
        setEnteredAgeValue(event.target.value)
    }

    const errorHandler = () => {
        setIsValid(null)
    }

    return (
        <div>
            {isValid && <ErrorModal title={isValid.title} message={isValid.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsernameValue} onChange={addUsernameHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAgeValue} onChange={addAgeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;