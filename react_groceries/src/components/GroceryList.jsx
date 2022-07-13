import { useState } from 'react'


export default function GroceryList (props) {
  let [remainingList, setList] = useState([  {
    item: 'Pasta',
    brand: 'Barilla',
    units: 'box',
    quantity: 1,
    isPurchased: false
  },
  {
    item: 'Parmesan cheese',
    brand: 'Kraft',
    units: 'bottle',
    quantity: 1,
    isPurchased: false
  },
  {
    item: 'Tomato sauce',
    brand: 'Bertolli',
    units: 'jar',
    quantity: 1,
    isPurchased: false
  }])


  const renderList = () => {
    let fullList = []
    {remainingList.forEach((grocery) => {
      if(grocery.isPurchased == false){
        fullList = [...fullList, grocery]
        console.log(fullList)
        setList(fullList)
      }
    })}
  }
  return(
    <div>
      <h3>Remaining Items:</h3>
      {remainingList.map((grocery) => (
        <div>
          <p key={grocery.item}>{grocery.quantity} {grocery.units} of {grocery.brand} {grocery.item}</p>
          <button key={grocery.quantity} onClick={() => {
            grocery.isPurchased = true
            renderList()
            }}>purchase</button>
        </div>
      ))}
    </div>
  )
}