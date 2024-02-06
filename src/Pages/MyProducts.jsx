import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import axios from "axios";
const MyProducts = ()=>{
    const [data,setData] =useState([ ]);
    
    const local =localStorage.getItem('Uemail');

    useEffect(() => {
        const fetchData = async () => {
            
            const response = await axios.get(`http://localhost:3002/mine?q=${local}`);
            
            setData(response.data);
            
         
        };
    
        fetchData();
      }, [local]);
      const displayContent = (value)=>{
        console.log(value.describe)
        Swal.fire({
         
          
            html: `<div class="productDetails">
            <p><b>${value.name}</b></p>
            <p><b>Description:</b> ${value.describe}</p>
            <p><b>Product Age:</b> ${value.age} years</p>
            <p><b>Price:</b> ${value.price}</p>
            <p><b>Location:</b> ${value.location}</p>
            <p><b>Quantity:</b> ${value.quantity}</p>
            
            </div>`,
          
        });
      }
      

    
return(
    <div>
        <Navbar/>
        <ul className="HomeContent">
            {data.map((value)=>(
                <div className="Contents" onDoubleClick={()=>displayContent(value)}>
                <div className="cate">{value.category}</div>
                <div className="IMAGE"><img src={value.image} alt="wait" height={200} width={300}/></div>
                <div className="type">{value.type}</div>
                <div className="name">{value.name}</div>
                <div className="price">Rs.{value.price}</div>
                <div className="offer">{value.offer}</div>
                <button className="interest">View Interests</button>
               
                
                </div>
                
            )

           ) }
            

           
        </ul>
        
    </div>
)
}
export default MyProducts;