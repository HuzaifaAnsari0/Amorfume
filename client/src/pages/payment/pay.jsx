/* global Razorpay */
import { useState } from 'react'

function App() {

  const paymentHandler = async (e) => {
    const amount= 500;
    const currency = 'INR';
    const receiptId = 'receipt#1';
    const response = await fetch('http://localhost:5000/order', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId
      })
  })

  const order = await response.json()
  console.log('order', order)

  var option = {
    key:"",
    amount,
    currency,
    name:"Amorfume",
    despescription:"some description",
    image:"https://i.bb.co/5Y3m33n/test.png",
    order_id: order.id,
    handler: async function(response){
      const body = {...response,}

      const validateResponse = await fetch('http://localhost:5000/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const jsonResponse = await validateResponse.json()
      console.log('jsonResponse', jsonResponse)
    },
    prefill:{
      name:"Huzaifa",
      email:"example@gmail.com",
      contact:"555555555",
    },
    notes:{
      address:"some address",
    },
    theme:{
      color:"#3399cc",
    }
  }
  const rzp1 = new Razorpay(option);
  rzp1.on("payment.failed", function(response){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
  e.preventDefault();

  }
  return (
<>
<div className="product">
  <h1>Razor Pay</h1>
  <button className='button' onClick={paymentHandler}>Pay now</button>
  </div>
</>
  )
}

export default App
