/* eslint-disable no-undef */
import "./App.css";
import { createContext, useContext, useState } from "react";
// step1
// store
const shopCtx=createContext(null);
export default function App() {
  const [prodPrice,setProdPrice]=useState(365.50)
  const [cartCount,setCartCount]=useState(1);
  const [totalCost, setTotalCost] = useState(0);
  return (
    <div className="App">
      {/* step2 creating provider and passing values */}
      <shopCtx.Provider
        value={{
          cartCount,
          setCartCount,
          totalCost,
          setTotalCost,
          prodPrice,
          setProdPrice
          
        }}
      >
        <ALLComponent />
      </shopCtx.Provider>
    </div>
  );
}

function ALLComponent() {
  return (
    <div>
       <Price />
      <CartPage />
     
    </div>
  );
}
function Price() {
  const {prodPrice,setProdPrice}=useContext(shopCtx)
  return (
    <div className="text-center">
      <label>
      Enter the price :
      </label>
     $
      <input 
        type="number"
        onChange={(e) =>setProdPrice(e.target.value)}
        value={prodPrice}
      />
    </div>
  );
}

function CartPage() {
  //step 3 use the context
  const {  prodPrice,setProdPrice,cartCount,setCartCount,setTotalCost,totalCost} = useContext(shopCtx);
  return (
    <div className="prod-card">
     <div className="container "> 
     <div className="row">
    <div className="col-3 ">
    <img src="data:image/jpeg;base64,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" />
    <p className="h5 margin">SUBTOTAL:</p>
    <p className="small m">SHIPPING:</p>
    <div className="margin">
    <p className="h5 mt-4 fw-bold">TOTAL :</p>
    </div>
    </div>
    <div className="col-5 text-start mt-4 ">
      
        <p><strong>WOLF SO GRIM AND MANGY</strong></p>
        <p  >order and delivery</p>
        <p className="text-break  lh-sm"><small>
        When I am not typing manifests, I churn out fantasy books no-one reads.Less Young Adult, more MAD: Middle Aged Disappointment.</small></p>
    
       
    </div>
    
    <div className="col-4 text-center ">
    <div className="cart-action">
    <input className="text-danger num"
        type="number"
        onChange={(e) =>setCartCount(e.target.value)}
        value={cartCount}
      />
    
      <span className="text "> 
      <p className="mt-1 ml-0 "> $.{prodPrice}</p>
      </span>

         </div>

         <div className="margin ">

      <button onClick={() =>setTotalCost(prodPrice*cartCount) }>
       Total
      </button>
      <button className="text-danger m-1" onClick={() => {setTotalCost(0);setCartCount(0);
        setProdPrice(0)}}>
       Remove
      </button>
      
      
      </div>
      <div className="margin ">
      <p className="h6 text">$.{totalCost}</p>
      <p className="small">FREE</p>
      </div>

      <div className="margin ">
      <p className="h6 text ml-4">$.{totalCost}</p>
      <p className="small1 text-danger ">Get Delivery Cash With NetCard</p>
      </div>
     
    </div>
  </div></div>
      

    </div>
  );
}





