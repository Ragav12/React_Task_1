import logo from './logo.svg';
import './App.css';
import EmployeeDetail from './Employees/EmployeeDetail';
import NewEmployee from './Employees/NewEmployee';
import { useState } from 'react';
import Employees from './Employees/Employees';
import EmployeeFilter from './Employees/EmployeeFilter';
import EmployeeForm from './Employees/EmployeeForm';
import { EmployeeContext } from './Employees/EmployeeContext';
import EmployeeContextProvider from './Employees/EmployeeContext';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo} from 'react';
import {sendExpenseData} from './store'
import employeeStore from './store';

const App=()=> {
  const items=useSelector(state=>state.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      fetch('https://react-employees-e80e8-default-rtdb.firebaseio.com/employee.json', {
                method: 'PUT',
                body: JSON.stringify(items)
              })
            },
    [items, dispatch]
  );

  return (
    <EmployeeContextProvider>
      <div>
        <NewEmployee>
        <EmployeeForm/>
        </NewEmployee>
        <Employees/>
      </div>
      </EmployeeContextProvider>
  );
}

export default App;

