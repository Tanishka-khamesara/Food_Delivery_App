import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({ category, setCategory }) => {
  // Log the category state to check if it's updating correctly
  console.log("Category state:", category);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Here is your diverse menu to choose the food according to your cravings, good food - good mood - good focus is our vision to achieve</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          // Log the current item and category for debugging
          console.log("Item:", item);
          console.log("Category:", category);
          
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
