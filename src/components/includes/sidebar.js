import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = ({data}) => { 
   const activeBar = useSelector(state=>state.starShip.activeStarShip)

   const listInfo = () =>{
     if(data && data.length>0){
        return data.map((item,index)=>{
          return <li className={`${activeBar === item.uid?'active':''}`} key={index}>{item.name} : {item.count}</li>
        })
     }
   }

   return (
    <aside className='col-md-2 sidebar'>
       <ul>
        {listInfo()}
       </ul>
    </aside>
  );
}

export default Sidebar;
