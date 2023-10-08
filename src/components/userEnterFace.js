import React,{useRef} from 'react'


const UserEnterFace = (props)=>{

    const prdPrice = useRef()
    const prdId = useRef()
    const prdName = useRef()
    const submitHandler =(e)=>{
     e.preventDefault() 

    const  ProductId = prdId.current.value;
    const  ProductName = prdName.current.value;
    const  ProductPrice = prdPrice.current.value;

    

     props.changeUsers(ProductId,ProductName,ProductPrice)
     prdId.current.value=''
     prdName.current.value=''
     prdPrice.current.value=''
    }
   return (
    <div>
    <form id='addform' onSubmit={submitHandler}>
       <label>Product ID</label>
      <input type='number' id='prdId' ref={prdId}></input>
      <label>Product Price</label>
      <input type='text' id='prdPrice' ref={prdPrice}></input>
      <label>Product Name</label>
      <input id='preName' type='text' ref={prdName}></input>
      <button type='submit'>Submit</button>
    </form>
      
    </div>
   )
}
export default UserEnterFace;