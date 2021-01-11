import React from 'react'

class Categories extends React.Component{

  render(){
    let select=document.getElementById("selectNumber")
    let options=document.createElement("option")
    options.textContent="yup"
    options.value="yup"
    select.add(options);

  return(
    <div>
      <h>Select 5 Categories from the lists below to start playing</h>
  <form id="myForm">
    <select id="selectNumber">
      <option>Choose a number</option>
    </select>
  </form>
     

    </div>
  )}
}

export default Categories