import { useState } from "react"
import GroceryList from "./GroceryList"
import NewItem from "./NewItem"

const App = () => {
  const [items, setItems] = useState([])

  const onAdd = (item) => {
    setItems([...items, item])
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <NewItem onAdd={onAdd} />
      <GroceryList items={items} />
    </div>
  )
}

export default App