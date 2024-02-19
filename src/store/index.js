import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

const Employees=[
    {id:'E1',name:'Ragav',dob:new Date(2024,8,11),exp:12},
    {id:'E2',name:'Ragavan',dob:new Date(2023,1,7),exp:10},
    {id:'E3',name:'Aravi',dob:new Date(2021,11,12),exp:9},
    {id:'E4',name:'Aravinth',dob:new Date(2022,7,9),exp:7},
];

const initialState={items:Employees};
const employeeSlice= createSlice({
    name: 'employee',
    initialState: initialState,
    reducers:{
        addEmployee(state,action){
            const employeeData={
                ...action.payload,
                id: Math.random().toString()
            };
    
            state.items.push(employeeData);

        },
        removeEmployee(state, action) {
            const employeeIdToRemove = action.payload.id;
            console.log(employeeIdToRemove)
            state.items = state.items.filter(employee => employee.id !== employeeIdToRemove);
         }
    }
});
export const sendEmployeeData = (employeeData) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await  fetch('https://react-employees-e80e8-default-rtdb.firebaseio.com/employee.json', {
                method: 'PUT',
                body: JSON.stringify(employeeData),
              });

              if(!response.ok) {
                throw new Error("Sending employee data failed!");
              }
        };

        try {
            await sendRequest();
        }catch (error) {
            console.log(error);
        }
    };
}

const employeeStore=configureStore({
    reducer:employeeSlice.reducer
});
export default employeeStore;
export const employeeActions = employeeSlice.actions;
