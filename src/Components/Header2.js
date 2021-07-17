import React from 'react'
import '../Css/header2.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//this page renders only when the page width is less than 600px
function Header2() {

    return (
        <div className="header2">
            <Link to="/html" className="title">
                    <div style={{color:'rgb(123,92,78)',marginRight:'12px',fontSize:'20px'}}>&lt;&gt;</div>
            </Link>

            <Link to="/css" className="title">
                    <div style={{color:'rgb(85,154,187)',marginRight:'12px',fontSize:'20px'}}>#</div>
            </Link>

            <Link to="/js" className="title">
                    <div style={{color:'rgb(201,201,49)',marginRight:'12px',fontSize:'20px'}}>JS</div>
            </Link>

            <Link to="/live" className="title">
                    <div style={{color:'white',marginRight:'12px',fontSize:'20px'}}>Live</div>
            </Link>
                           

                            
               
           
            
        </div>
    )
}

export default Header2
