import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className="main-navs">

            <Link to ="/"> Home <Link/></Link>
            <Link to ="/contact"> Add Stock </Link>
            <Link to ="/edit/:id"> Edit Stocks <Link/></Link>
            <Link to ="/stock-data"> Stock Data </Link>
          
            </div>
        

        </>
    )
}

export default Navbar
