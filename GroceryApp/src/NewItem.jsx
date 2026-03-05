import { useState } from "react"

const NewItem = (props) => {
  const [newItem, setNewItem] = useState("")

  const addItem = () => {
    props.onAdd(newItem)
    setNewItem("")
  }

  return (
    <div>
      <input
        value={newItem}
        onChange={addlist => setNewItem(addlist.target.value)}
        placeholder="Add an item..."
      />
      <button onClick={addItem}>+</button>
    </div>
  )
}

export default NewItem