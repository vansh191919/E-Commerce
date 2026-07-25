import React from 'react'
import Item from '../Components/Item/Item'
import all_product from '../Components/Assets/all_product'
import './CSS/LatestCollection.css'

const LatestCollection = () => {
  return (
    <div className='latestcollection'>
      <h1>Latest Collection</h1>
      <hr />
      <div className="latestcollection-item">
        {all_product.map((item,i) => {
            return <Item 
                key={i}
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} />
         })}
      </div>
    </div>
  )
}

export default LatestCollection
