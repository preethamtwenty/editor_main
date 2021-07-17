import React from 'react';
import '../Css/intro.css';
import icon2 from '../Images/icon2..png';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Intro() {
    return (
        <div className="intro">
            
            <div className="intro_header">
                
                <img src={icon2} className="intro_image"/>
                <div className="intro_header_text">🖐️ Hellooo user </div>
            </div>

            <div className="intro_body">
                <div  className="intro_body_header">⬇️  Steps to use this code editor :</div>
                <div className="intro__body">
                
                <div className="intro_body_step">
                    1.<span style={{marginRight:'20px'}} ></span>Choose any one of the editor on your left
                </div>

                <div className="intro_body_step">
                    2.<span style={{marginRight:'20px'}} ></span>Write the code in your editors
                </div>
                
                <div className="intro_body_step">
                    3.<span style={{marginRight:'20px'}} ></span>View it immediately at the bottom 
                </div>

                <div style={{marginTop:'30px'}}></div>

                <div style={{textAlign:'center'}} >
                        or
                </div>


                <div style={{marginTop:'60px',fontSize:'20px',fontWeight:700}}>
                        ✔️ Click on the buttons to start
                </div>

                <div className="buttons__intro">
                    <Link className="button__html in_button" to="/html">
                        <Button className="button__html in_button">HTML</Button>
                    </Link>

                    <Link className="button__css in_button" to="/css">
                        <Button className="button__css in_button">CSS</Button>
                    </Link>

                    <Link className="button__js in_button" to="/js">
                        <Button  className="button__js in_button">JS</Button>
                    </Link>
                
                </div>
            
                </div>
        

            

           

            </div>

            <div  style={{textAlign:'center',fontSize:'10px'}}>
                    &copy;Preetham Lekkala
            </div>

            
        </div>
    )
}

export default Intro
