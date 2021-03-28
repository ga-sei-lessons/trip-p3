import { useState } from 'react'
// import axios from 'axios'

export default function ChecklistTool(props) {
  
  console.log(props, '⛈')
  const [category, setCategory] = useState('')
  const [newItem, setNewItem] = useState('')

  // handleSubmit = e => {
  //   e.preventDefault()
  //   console.log(newItem)
  // const newClothAndAcc = [...mapClothingAndAccessories, setNewIem] ?????
  // }

  // console.log(props)
  // console.log(props.checklist)
  // console.log(props.checklist.id)
  // console.log(props.checklist._id)
                  //    NEED to find :tripChecklistId and :itemId to hit delete route (trying to console.log it, but getting undefined)
  // handleDelete = e => {
  //   e.preventDefault()
  //   await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist/:tripChecklistId/items/:itemId`)
  // }


  
  const newChecklistArray = props.tripChecklist
  console.log(props.tripChecklist)
  const filterClothingAndAccessories = newChecklistArray.filter(item => item.category === "clothing and accessories")
  const mapClothingAndAccessories = filterClothingAndAccessories.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        {/* <form onSubmit={handleDelete}> */}
        <form>
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  const filterToiletries = newChecklistArray.filter(item => item.category === "toiletries")
  const mapToiletries = filterToiletries.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        {/* <form onSubmit={handleDelete}> */}
        <form>
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  const filterMiscellaneous = newChecklistArray.filter(item => item.category === "miscellaneous")
  const mapMiscellaneous = filterMiscellaneous.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        {/* <form onSubmit={handleDelete}> */}
        <form>
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  const filterTodo = newChecklistArray.filter(item => item.category === "to-do")
  const mapTodo = filterTodo.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        <form >
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  // const toiletries
  // const miscellaneous 
  // const toDo

  return (
    <div>
    {/* // add new item to list */}
    {/* <form onSubmit={ handleSubmit } >  when uncommented --> throwing an error, the same as is NoteTool file */}
    <form>
        <label htmlFor='item-input'>Add items to checklist!</label>

        <input
            id='item-input'
            type='text'
            placeholder='add an item'
            onChange={e => setNewItem(e.target.value)}
            value={newItem}
        />
        <input
            type="submit"
            value="Add"
        />

    <div>
      <label className="label">Category</label>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          >
          <option disabled="disabled" value="" className="is-hidden">Select One</option>
          <option>Clothing and Accessories</option>
          <option>Toiletries</option>
          <option>Miscellaneous</option>
          <option>To-do List</option>
        </select>
    </div>
</form>



      <div>
          <h1>Checklist ✔️</h1>
          <div>
          <h2>Clothing and Accessories</h2>
            {mapClothingAndAccessories}
          </div>
          <div>
          <h2>Toiletries</h2>
            {mapToiletries}
          </div>
          <div>
          <h2>Miscellaneous</h2>
            {mapMiscellaneous}
          </div>
          <div>
          <h2>To-do List</h2>
            {mapTodo}
          </div>
          
      </div>
      </div>
  )
}


      