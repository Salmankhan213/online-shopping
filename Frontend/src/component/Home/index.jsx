import React from 'react'
import "./home.css"
import { useGetallProductQuery} from '../../services/getallProduct'
import { addtocart} from "../../features/product/CartSlice"
import { useDispatch } from 'react-redux';


function Home() {

  const handleaddtocard = (product)=>{
      dispatch(addtocart(product))
  }
 
  const dispatch = useDispatch()
  const {data,error,isLoading} = useGetallProductQuery()
  return (
     <div className="home-container">
      {isLoading? (<p>isloading</p>)
      :error?(<p>is error occured....</p>)
      :(<>
       <h1>New Arrivals</h1>
       <div className="products">
        {data?.map((product)=> <div key={product.id} className='product'>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name}/>
          <div className="detail">
            <span className='mt-2 mb-5'>{product.desc}</span>
            <h4>PKR-{product.price}</h4>
            
          </div>
          <button className='btn btn-danger' onClick={()=>handleaddtocard(product)} >Add to cart</button>
          
        </div>
        )}
       </div>
      </>)
      }
     </div>
  )
}

export default Home