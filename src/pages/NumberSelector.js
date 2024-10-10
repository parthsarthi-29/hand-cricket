import React ,{useState} from 'react'
import styled from "styled-components";
import'./NumberSelector.css'
const NumberSelctor=({selectedNumber,setSelectedNumber})=> {
    
    const arr=[1,2,3,4,5,6]
    
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
    }
  return (
    
    <div className='Boxes'>
      {arr.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
    </div>
  )
}
export default NumberSelctor;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
