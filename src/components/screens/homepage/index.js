import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Header from './../../includes/header';
import Viewer from '../../includes/3DViewer';
import Sidebar from '../../includes/sidebar';
import { getStarShips } from '../../../redux/actions/starShipActions';
import './styles.css';

const Homepage = () => {
  const dispatch = useDispatch()
  const starShips = useSelector(state=>state.starShip.starShips)
  useEffect(()=>{
    dispatch(getStarShips())   
  },[dispatch])

  return (
    <>
      <Header />
      <main className='container-fluid'>
        <div className='row'>
          <Viewer data={starShips} />
          <Sidebar data={starShips} />
        </div>
      </main>
    </>
  );
}

export default Homepage;
