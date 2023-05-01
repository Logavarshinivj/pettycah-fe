import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Delete = ({allTransaction}) => {


    const deleteUser=async(id)=>{
        console.warn(id)
      let result= await fetch (`https://pettycash-be-rm75.vercel.app/get-trans/${id}`,{
        method: 'DELETE',
      });
      result=await result.json();
      console.warn(result)
      if(result){
        alert("user deleted successfully")
      }
      }
  return (
    
    <IconButton onClick={()=>deleteUser(allTransaction[0]._id)}><DeleteIcon color="primary"/></IconButton>

  )
}

export default Delete