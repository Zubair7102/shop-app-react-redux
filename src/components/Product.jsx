// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-hot-toast";
import { add, remove } from '../redux/Slice/CartSlice';

const Product = ({item}) => {

  const {cart} = useSelector((state) => state);
  // The useSelector hook is used to access the Redux store state in a React component.
  // Then, it uses destructuring to extract the cart property from the state object and assigns it to the local variable cart.

  const dispatch = useDispatch();

  const addToCart = () =>
  {
    dispatch(add(item));
    toast.success("Item added to the Cart")
  }

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Item removed from Cart")
  }


  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
      <img src={item.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p>{item.price}</p>
      </div>

      {
        // cart is an array (presumably of items in a shopping cart).
        // The some method checks if at least one element in the cart array satisfies the provided testing function.
        // (p) => p.id == item.id is a testing function that takes each item p from the cart array and checks if its id is equal to item.id.
        cart.some((p) => p.id === item.id) ? 
        // If at least one item in the cart has the same id as item.id, some returns true; otherwise, it returns false.
        (<button 
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
        onClick={removeFromCart}>
          Remove Item
        </button>) :
        (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
        onClick={addToCart}>
          Add to Cart
        </button>)
      }
    </div>
  )
}

export default Product;

