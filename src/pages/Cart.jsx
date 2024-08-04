import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmoun, setTotalAmount] = useState(0);


    useEffect( ()=> {
        setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0))
    },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (<div>
            <div>
                {
                    // Here, we are using the map function to iterate over the cart array and return a CartItem component for each item.

                    cart.map( (item,index) => {
                        // The map function is used to iterate over each element in the cart array. For each element, it runs the provided function, which takes two arguments:
                        // item: The current element in the array (an individual item from the cart).
                        // index: The index of the current element in the array (its position in the array).
                        return <CartItem key = {item.id} item={item} itemIndex={index}/>
                        // For each item in the cart array, a CartItem component is returned.
                        // Key Prop: This is a special prop in React used to help identify which items have changed, been added, or removed. It helps React optimize rendering. It's important to use a unique value for key (like item.id if id is unique for each item).
                        // The item prop is passed to the CartItem component, providing the current item data to the component.
                        // The itemIndex prop is passed to the CartItem component, providing the current index of the item in the cart array.
                    })
                }
            </div>

            <div>
                <div>
                    <div>Your Cart</div>
                    <div>Summary</div>
                    <p>
                        <span>Total Items: {cart.length}</span>
                    </p>
                </div>
                <div>
                    <p>Total Amount: ${totalAmount}</p>
                    <button>
                        CheckOut Now
                    </button>
                </div>
            </div>
        
        
        
        
        </div>) :
        (
            <div>
            <h1>Your Cart is empty</h1>
            <Link to={"/"}>
            <button>
            Shop Now 
            </button>
            </Link>
            </div>
        )

    }
      

    </div>
  )
}

export default Cart
