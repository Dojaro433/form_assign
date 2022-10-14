import React from 'react'
import "./Mytable.css";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Mytable = () => {

    const [query, setQuery] = useState();
    const [userData ,setUserData] = useState([]);
    useEffect(()=>{

      axios.get("http://localhost:8000/fills")
      .then((res)=>{

          const Userraw = res.data;
         // console.log(Userraw);
          setUserData(Userraw);
  
  
      })
      .catch(err=>console.log(err))


    },[]);

    console.log(userData);
  return (
    <div>
   <div className='Table'>
  
  Added user
  </div>
  <table className="table">
   <thead>
    <th>
      NAme
      </th>

      <th>
        Birth<br/> date
      </th>


      <th>
        Sex
      </th>


      <th>
        Mobile
      </th>

      <th>
      Govi ID
      </th>


      <th>
      Gov ID
      </th>


      <th>
        Gurdi<br/> Detail
      </th>

      <th>
        Gurdian<br/>Name
      </th>



      <th>
        Email
      </th>


      <th>
        E<br/>Number
      </th>



      <th>
        Adreeses
      </th>



      <th>
        State
      </th>

      <th>
        City
      </th>

      <th>
        Country
      </th>

      <th>
        Pincode
      </th>


      <th>
        Occupation
      </th>



      <th>
        Religion
      </th>


      <th>
        Maritial<br/>Status
      </th>


      <th>
        Blood<br/>Group
      </th>

      <th>
        Nationality
      </th>

   </thead>



   {
    userData.reverse().map((value)=>{


    return(

      <tr>

     <td>
      {value.Name}
     </td>

 
      <td>
     {value.Date}
     </td>  


     <td>
      {value.Sex}
     </td>



     
     <td>
      {value.Mobile}
     </td>



     
     <td>
      {value.Govid}
     </td>



     
     <td>
      {value.Govrid}
     </td>
    

    
     <td>
      {value.Label}
     </td>
        

     
     <td>
      {value.Gname}
     </td>

      

     
     <td>
      {value.Email}
     </td>



     
     <td>
      {value.CEumber}
     </td>



     
     <td>
      {value.Address}
     </td>




     
     <td>
      {value.State}
     </td>



     
     <td>
      {value.City}
     </td>




     
     <td>
      {value.Country}
     </td>




     
     <td>
      {value.Pincode}
     </td>



     
     <td>
      {value.Occupation}
     </td>




     
     <td>
      {value.Relegion}
     </td>


     <td>
      {value.Married}
     </td>

     
     <td>
      {value.Bgroup}
     </td>


     
     <td>
      {value.Nationality}
     </td>







      </tr>




    )






    })
   }




  </table>

 
  
 


    </div>
  )
}

export default Mytable;