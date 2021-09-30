import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
        <div className="main-home">
        <span className="intro">Welcome to my application Stock Manager </span>
        &emsp;
        <Link className="btn btn-sm btn-success pl-2" to ="/add">Add Stock</Link>
        </div>
        </>
    )
}

export default Home
