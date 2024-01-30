import React from 'react'

import { useState } from 'react'

const Tabs = (props) => {
    const{data,setCurrentTabIndex,currentTabIndex}=props
    

const tabStyle = (index) => {
        if (index === currentTabIndex) {
          return "selectedTab";
        } else {
          return "nonSelectedTab";
        }
      }
  return (
    <>
    <div>

    {
    props.data.map((item,index)=>{
        
        return (

            
        
            <div key={index} className={`tab ${tabStyle(index)}`} onClick={(e)=>(setCurrentTabIndex(index))} type="button">{item.title} </div>
      

        )
    })
    }
    </div>
    
  
    </>
  )
}



export default Tabs