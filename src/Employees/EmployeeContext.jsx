import { createContext, useReducer } from "react";
import { useState } from "react";

export const EmployeeContext = createContext({
    items:[],
    onSaveEmployeeData: () => {},
});

function employeeReducer(state,action){
    const updatedEmployees=[...state]

    if(action.type ==='ADD_EMPLOYEE'){
        const employeeData={
            ...action.payload,
            id: Math.random().toString()
        };

        updatedEmployees.push(employeeData);
    }
    return updatedEmployees;
}


export default function EmployeeContextProvider({children}){
    const Employees=[
        {id:'E1',name:'Ragav',dob:new Date(2024,8,11),exp:12},
        {id:'E2',name:'Ragavan',dob:new Date(2023,1,7),exp:10},
        {id:'E3',name:'Aravi',dob:new Date(2021,11,12),exp:9},
        {id:'E4',name:'Aravinth',dob:new Date(2022,7,9),exp:7},
    ];
    
    const[employees,dispatch]=useReducer(employeeReducer,Employees);

    const addEmployeeHandler=employee=>{
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload:employee
            }
        )
    }
    const contextValue={
        items: employees,
        onSaveEmployeeData: addEmployeeHandler
    };
    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}
