import React,{useState} from "react";
import "./EmployeeForm.css"
import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { useDispatch } from "react-redux";
import { employeeActions } from "../store";

const EmployeeForm= (props) =>{
    
    const dispatch = useDispatch();
    
    const [enteredName,setEnteredName]= useState('');
    const [enteredExp,setEnteredExp]= useState('');
    const [enteredDob,setEnteredDob]= useState('');
    
    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const expChangeHandler = (event) =>{
        setEnteredExp(event.target.value);
    }
    const dobChangeHandler = (event) =>{
        setEnteredDob(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        
        const employeeData={
            name:enteredName,
            exp:enteredExp,
            dob:new Date(enteredDob)
        }
        dispatch(employeeActions.addEmployee(employeeData));
        setEnteredName('');
        setEnteredExp('');
        setEnteredDob('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-employee__controls">
            <div className="new-employee__control">
                <label>Employee Name</label>
                <input type="text" onChange={nameChangeHandler}/>
            </div>
            <div className="new-employee__control">
                <label>Years of experience</label>
                <input type="number" min="0" onChange={expChangeHandler}/>
            </div>
            <div className="new-employee__control">
                <label>Date of Birth</label>
                <input type="date" onChange={dobChangeHandler}/>
            </div>
            <div className="new-employee__controls">
                <button type="submit" onSubmit={submitHandler}>Add Employee</button>
            </div>
            </div>
        </form>
    );

}
export default EmployeeForm
