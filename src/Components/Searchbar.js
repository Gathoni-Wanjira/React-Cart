import React from 'react'

function Searchbar({currentText , updateText , currentCheckState , updateCheckbox}) {

    function handleTextChange (e) {
        updateText(e.target.value)
        
    }
    function handleCheckboxChange (e) {
        updateCheckbox (e.target.checked)

    }
  return (
    <div className='Search'>
        <input placeholder='Search' value={currentText} type='text' onChange={handleTextChange}></input> <br/>
        <input name ="filter" type='checkbox' checked = {currentCheckState}onChange={handleCheckboxChange} ></input>
        <label  htmlFor ="filter">Only show products in stock</label>
       
    </div>
  )
}
export default Searchbar;