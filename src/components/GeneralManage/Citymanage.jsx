import React, { useState,useEffect } from 'react'
import { getReq, postReq } from '../middleware/AxiosApisCall';
import { Store } from 'react-notifications-component';
import CityTable from './CityTable';
import DataList from './DataList';
function Citymanage() {
 const path="City"

const [inputs,setInputs]=useState({});

 const [cityList,setCityList]=useState();//remove this 


 const loadCity=async()=>{   //remove this 
  const response=await getReq(path)
  setCityList(response.data)
 }

 useEffect(() => {//remove this 
 loadCity();
 }, [])


 const handleChange=(event)=>{
 
    const name=event.target.name;
    const value=event.target.value;
    setInputs((values)=>({...values,[name]:value}))
  }
  
   
  const handleSubmit=async(event)=>{
   event.preventDefault();
  const response =await postReq(path,inputs)
  if(response.status==="success")
  {
    loadCity();
    Store.addNotification({//remove this 
      title:"Add City",
      message:"City Added successfully",
      type:"success",
            insert: "top",
            container: "top-right",
            dismiss: {
              duration: 1000,
            }
    })
  }
  else{
    Store.addNotification({//remove this 
      title:"Add City",
      message:response.error,
      type: "danger",
      insert: "top",
      container: "top-right",
      dismiss: {
        duration: 2000,
        
      }
    })
  }
}

  return (
    <React.Fragment>
    <div className="add-user-container">
    <div>
    <span className="componet-title">City Manage</span>
  </div>
 
  <form className="flex-row form-2col-ver"  onSubmit={handleSubmit}>
  <div className="componet-sub-title">
    <span>City Details</span>
  </div>
 
 
  <div className='general-manage-div'>
  <label htmlFor="city">City:</label>
  <input name="city" type="text" value={inputs.city || "" } onChange={handleChange} required/>
  <DataList path={'State'} handleChange={handleChange} name={'state'} heading={'State'}/>
  <button className="submit-btn">Add New</button>
  </div>
   
  </form>
  
  <div className="componet-sub2-title">
  <span>Total City:</span>
 </div>
 <CityTable key={cityList} table={cityList} path={path} parentFunction={loadCity}/>
 
 </div>
    
    </React.Fragment>
  )
}

export default Citymanage
