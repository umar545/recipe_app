import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa'
import {GiChopsticks, GiNoodles} from 'react-icons/gi'
function Categories() {
  return (
    <div className="row my-4">
    
        <div className="col-3">
            <NavLink to={'cuisine/italian'} className='catergory d-block text-dark text-decoration-none text-center'>
                <FaPizzaSlice />
                <h5>Italian</h5>
            </NavLink>
        </div>
        <div className="col-3">
            <NavLink to={'cuisine/american'} className='catergory d-block text-dark text-decoration-none text-center'>
                <FaHamburger />
                <h5>American</h5>
            </NavLink>
        </div>
        <div className="col-3">
            <NavLink to={'cuisine/thai'} className='catergory d-block text-dark text-decoration-none text-center'>
                <GiNoodles />
                <h5>Thai</h5>
            </NavLink>
        </div>
        <div className="col-3">
            <NavLink to={'cuisine/japanese'} className='catergory d-block text-dark text-decoration-none text-center'>
                <GiChopsticks />
                <h5>Japanese</h5>
            </NavLink>
        </div>
        
    </div>
  )
}

export default Categories
