import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className="main-navs">

            <Link to ="/"> Home <Link/>
            <Link to ="/contact"> Add Stock 
            </Link>
            </Link>
            </div>
        

        </>
    )
}

export default Navbar
