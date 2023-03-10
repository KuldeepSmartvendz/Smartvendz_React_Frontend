
import React, { useState ,useContext} from 'react'
import MachineContext from '../Context/MachineContext'

function Machine_details() {
 
  const {add1,setAdd1} = useContext(MachineContext)
  
  const tempdata={slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:"",del:""};
  const[slotdata,setSlotdata]=useState([])

  const[slotno,setSlotno]=useState([tempdata.slno]);
  const[stockname,setStockname]=useState({});
  const[currentStock,setCurrentStock]=useState({});
  const[initialstock,setInitialStock]=useState({});

  function handleSlot()
  {  
    console.log(slotdata);

    setSlotdata((previousState) =>{ return [ ...previousState,tempdata ]
      
  });
   
  }
  console.log(tempdata.slno.stockname);
  function closeAddnew()
   {
    setAdd1(!false);
   }
  return (
    <React.Fragment>
    <div className="mm_container">
  
    <div><span className='main_head'>Machine Details</span></div>
    
    <div className='btn_container'>
    <button  className='mmAddnew_btn'>Save</button>
    {/*<button  className='mmAddnew_btn'>Add New</button> */}
    <button className='mmClose_btn' onClick={closeAddnew}>Close</button>
    </div>
    </div>
    
    <div className='container_div'>
    <div><span className='heading'>Machine Information</span></div>
   

    <form className='form_datas'>
    
   <div className='left_div'>
   
   <div className='from_field'>
  <label>Name</label>
  <input name='name'/>
   </div>

   <div className='from_field'>
   <label>Employee Name</label>
   <input name='Ename'/>
   </div>

   <div className='from_field'>
   <label>Manufacture Name</label>
   <input name='mname'/>
   </div>

   <div className='from_field'>
   <label>Purchase Date</label>
   <input name='pdate'/>
   </div>

   <div className='from_field'>
   <label>Purchase Amount</label>
   <input name='pamount'/>
   </div>

   <div className='from_field'>
   <label>Service Amount</label>
   <input name='samount'/>
   </div>

   <div className='from_field'>
   <label>Service Duration To</label>
   <input name='sduration'/>
   </div>

   <div className='from_field'>
   <label className='from_field'>Service Email</label>
   <input name='sduration'/>
   </div>
  
   <div className='from_field'>
   <label>Service Details</label>
   <textarea/>
   </div>

   <div className='from_field'>
   <label>Is Coin Machine</label>
   <input type="checkbox"/>
   </div>
   </div>
  
   <div className='left_div'>
  
   <div className='from_field'>
   <label>Machine Code</label>
   <input name='mcode'/>
   </div>

   <div className='from_field'>
   <label>Location Name</label>
   <input name='lname'/>
   </div>

   <div className='from_field'>
   <label>Serial No</label>
   <input name='sno'/>
   </div>

   <div className='from_field'>
   <label>Purchase From</label>
   <input name='pfrom'/>
   </div>

   <div className='from_field'>
   <label>Service Type</label>
   <input name='stype'/>
   </div>

   <div className='from_field'>
   <label>Service Duration From</label>
   <input name='sdfrom'/>
   </div>

   <div className='from_field'>
   <label>Serviced By</label>
   <input name='sby'/>
   </div>

   <div className='from_field'>
   <label>Service Mobile No</label>
   <input name='sby'/>
   </div>
   
   <div className='from_field'> 
   <label for="remark">Remark</label>
   <textarea/>
   </div>
  
   <div className='from_field'>
   <label>Warehouse Name</label>
   <input name="wname"/>
   </div>

   </div>
   
<div className='btnsubmit'><button >Submit</button></div>
  
   </form>
   
   </div>
 
   {/*AddMachine slots start from here */}
   <div className='ams_container'>
   <div>
   <button className='mmAddnew_btn' onClick={handleSlot}>Add Machine Slots</button>
   </div>

   <div className='table_container'>
  <table>
  <tr>
  <th>SL NO</th>
  <th>Slot Name</th>
  <th>Material Name</th>
  <th>Current Stock</th>
  <th>Initial Stock</th>
  <th>Not In Use</th>
  <th>Delete</th>
  </tr>
  {
slotdata.map((mdata,key)=>{
  return(
<tr key={key}>
<td>{mdata.slno}</td>
  
  <td><input type="text" name='slotname'  value={stockname} onChange={(e)=>{setStockname(e.target.value)}} /></td>
  
  <td>
  <select>
  <option>{mdata.materialname}</option>
  </select>
  </td>
  
  <td><input type="text" name='cstock' value={mdata.currentstock}/></td>
  <td><input type="text" name='istock' value={mdata.initialstock}/></td>
  <td><input type="checkbox" name='notinuse'  value={mdata.notinuse}/></td>
  <td><button className='mmDelete_btn'>Delete</button></td>
</tr>
  )
})
  }
  
   </table>
  </div>

   </div>
 
    
    
    </React.Fragment>
  )
}

export default Machine_details