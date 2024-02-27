import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <div className="App container mt-3">
      <AppProvider>
        <h1 className='mb-3'>Shopping App</h1>
        <div className='row'>
          <div className='col'>
            <Location />
          </div>
          <div className='col'>
            <CartValue />
          </div>
        </div>
        <h2>Shopping Cart</h2>
        <ExpenseList />
        <h2>Add Items</h2>
        <ItemSelected />
      </AppProvider>
    </div>
  );
}

export default App;
