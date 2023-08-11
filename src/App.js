import './App.css';
import Searchbar from './Components/Searchbar';
import ProductTable from './Components/ProductTable';
import { useState } from 'react';

function App() {


    const [text, setText]= useState('');
    const [isChecked, setisChecked] = useState(false)

    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];


  return (
    <div className="App">
     <Searchbar currentText = {text} updateText = {setText} currentCheckState = {isChecked} updateCheckbox = {setisChecked} />
    <ProductTable products = {PRODUCTS}/>

    </div>
  );
}

export default App;
