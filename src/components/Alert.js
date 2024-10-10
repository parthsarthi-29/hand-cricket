import React from 'react'

export default function Alert({error,setError}) {
    if(error==='Error'){
        alert("Please Select a Number");
        setError('')
  return (
    <div>
      
    </div>
  )
}
if(error==='Error1'){
  alert("Please Select Odd or Eve");
  setError('')
return (
<div>

</div>
)
}
}
