import React from 'react';
import '../Css/header.css';
import g1 from '../Images/google.jpeg';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

//redux
import { selectUser } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';

import {auth, provider} from '../firebase';
import {
    login, logout 
} from '../features/user/userSlice';

//axios post stuff for the code paste
import axios from 'axios'
import PasteClient from "pastebin-api";





function Header({html,css,js}) {

    const user =useSelector(selectUser);
    const client = new PasteClient("71v7o2ianhHd8R0hJ4pI65Ey4qBqx-gi");
    const axios = require('axios');
    const qs = require('qs');


    const dispatch = useDispatch();

    //login functionality
    const Login=()=>{
       
        auth
        .signInWithPopup(provider)
        .then((result)=>{  
            const unsubscribe = auth.onAuthStateChanged((authUser) => {
                if (authUser) {
                  // user is logged in...
                  console.log(authUser);
                  dispatch(login({ //dispatch the user to the login action
                      user:authUser
                
                }))
                }
            
                else {
                  
                }
              });     
            
            
            
         
        })
        .catch((error)=>alert(error.message))
    
     
    
      }

      const Logout=()=>{   //logoout
          
          auth.signOut().then(() => {
            dispatch(logout())
          }
            
          ).catch((error) => {
              alert('error')
            // An error happened.
          });
       
      
     
    
      }
      
      
      //Not working (the save option is not working right now )

      //we need a pro account for pastebin for this and that is out of stock now
      
      const save=()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
       
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("api_dev_key", "JSdwzdaVCLczZl787TSDYrh04v4v5tCJ");
        urlencoded.append("api_paste_code", "test");
        urlencoded.append("api_option", "paste");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        fetch("https://pastebin.com/api/api_post.php", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => alert('SAVE FUNCTIONALTY IS NOT WORKING NOW AS PASTEBIN REQUIRES A PRO ACCOUNT TO IGNORE THE CORS ERROR.'));
          

      }

    

    return (
        <div className="header__">
        <div className="header">
            <div className="header_1">
            {
                    user?(
                        <div className="user_name">
                           
                               Hey {user.user?.displayName}  {/* display the username if he logs is */}

                            
                           
                        </div>
                        

                    ):(
                        <div className="user_name">
                            Hey Anonymus 

                        </div>

                    )
                }
            </div>
            <div className="header_2">
            {
                    user?(
                        <>
                        <button className="save_button" disabled={false} onClick={save}  ><SaveAltIcon className="save_icon"/>Save</button>
                     
                        <button className="login_with_google" onClick={Logout}>Logout </button>
                        </>

                       
                
                        

                    ):(
                        <>
                        {/* if no user then render this  */}
                        <button className="save_button" disabled={true}><SaveAltIcon/>Save</button>
                        <button className="login_with_google " onClick={Login}>Login with Google </button> 
                        </>

                        
                        
                        

                    )
                }
                
               
                
                
            </div>
        </div>
        </div>
    )
}

export default Header
