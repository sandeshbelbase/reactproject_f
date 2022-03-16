import React from 'react'
import { useState } from 'react';
import './styles/index.css';

const Todo = () => {
    const [food, setFood] = useState();

  const[foodList, setFoodList] = useState([]);

  const [editId, seteditId] = useState();

  const handleFood = (e) =>{
    setFood(e.target.value);
  }
  const addFood = () =>{
    if(!food){ 
      alert("Kei ta order deu");
    } 
    else if(editId){
      // console.log(editId)
      const editList =  foodList.map((item, index)=>{
        if(index+1 === editId){
          return food;
        }else{
          return item;
        }
      })
      setFoodList(editList)
    }
    else{
      setFoodList([...foodList, food]);
      setFood("");
    }

  }
  const deleteItem =(id)=>{  
    const updatedItems = foodList.filter((item, index)=>{
        return index !== id;
    });
    setFoodList(updatedItems);
}
const removeAll = () =>{
  setFoodList([]);
  setFood("");

}
const editItem = (id) =>{
  setFood(foodList[id])
    seteditId(id + 1)
}

  return (
    <>
    <div className='todo-wrap'>
      <h1>Food Ordering Todo_list</h1>
      <h3>{food}</h3>
      <input type="text" className='field' value={food} onChange={handleFood} placeholder='which food you wanna order?' />
      <button onClick={addFood}><i class="fas fa-plus"></i>ADD ORDER</button> 
      <h1>Ordered Food</h1>
     
      {
        foodList.map((item, index) =>
            <li key={index}>{item} <div><i class=" edit fas fa-edit" onClick={() => editItem(index)}></i> <i class="delete fas fa-trash-alt" onClick={ () => deleteItem(index) }></i></div></li>
        )
      }
      <button className='clear' onClick={removeAll}><i class="fas fa-broom" ></i>CLEAR LIST</button>
    </div>,

    </>
  );
}

export default Todo