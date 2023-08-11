import React from 'react'

function Searchbar({currentText , updateText}) {

    function handleTextChange (e) {
        updateText()
        
    }
    
  return (
    <div className='Search'>
        <input placeholder='Search' value={currentText} type='text' onChange={handleTextChange}></input> <br/>
        <input name ="filter" type='checkbox'></input>
        <label  htmlFor ="filter">Only show products in stock</label>
       
    </div>
  )
}

export default Searchbar;