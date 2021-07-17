import React,{useState} from 'react';
import '../Css/file_explorer.css';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";    
//material ui imports
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';  
import Avatar from '@material-ui/core/Avatar'; 
import { IconButton } from '@material-ui/core'; 

//images and icons 
import icon1 from '../Images/icon1.png';    //images
import icon2 from '../Images/icon2..png';   //images
import * as FaIcons from 'react-icons/fa';  //icon

//redux imports
import { selectUser } from '../features/user/userSlice';    
import { useSelector, useDispatch } from 'react-redux'; 
import {
    login, logout 
} from '../features/user/userSlice';   

//firebase


import {auth, provider} from '../firebase'; 



function File_Explorer() {
    const [sidebar, setSidebar] = useState(true);       //for the sidebar movement 
    const showSidebar = () => setSidebar(!sidebar);     //while sidebar is false it makes true and vice versa
    const user =useSelector(selectUser);                //user from the redux
    const dispatch = useDispatch();                     //dispatch the user from the website to redux 
   
      
    return (
        <div className="file__explorer">
             <div className={`file_explorer ${!sidebar &&  "file_explorer_small"}`}>
                 <IconButton>
                        <div className="" style={{padding:'20px',textAlign:'left'}} onClick={showSidebar}><FaIcons.FaBars  /></div>
                 </IconButton>

                 <div className="file_explorer_header">
                        <Link to ="/" className="file_explorer_header">
                            <img src={icon1 } className="image__emblem"/>

                            {sidebar==true ?(<div style={{marginLeft:'20px'}}>CODE EDITOR</div>):(<></>)}  {/*render when sidebar is true or else don't render that stuff */}
                            
                        </Link>

                 </div>
                

                <div className="file_explorer_body">

                
                

                    <div className="titles">
                
                        <Link to="/html" className="title">
                            <div style={{color:'rgb(123,92,78)',marginRight:'12px',fontSize:'20px'}}>&lt;&gt;</div>
                            {sidebar==true ?(<div style={{marginLeft:'20px'}}><div>index.html</div></div>):(<></>)}
                        </Link>
                
                
                        <Link to="/css" className="title"> 
                            <div style={{color:'rgb(85,154,187)',marginRight:'12px',fontSize:'20px'}}>#</div>
                            {sidebar==true ?(<div style={{marginLeft:'20px'}}><div>index.css</div></div>):(<></>)}
                        </Link>
                
                
                        <Link to="/js" className="title"> 
                            <div style={{color:'rgb(201,201,49)',marginRight:'12px',fontSize:'20px'}}>JS</div>
                            {sidebar==true ?(<div style={{marginLeft:'20px'}}><div>index.js</div></div>):(<></>)}
                        </Link>

                        <Link to="/live" className="title"> 
                            <div style={{color:'white',marginRight:'12px',fontSize:'20px'}}>LV</div>
                            {sidebar==true ?(<div style={{marginLeft:'20px'}}><div>Live</div></div>):(<></>)}
                        </Link>
                    
                    </div>
                </div>

                <div className="file_explorer_footer" >
                    {
                        user?(
                            <>
                            <Avatar alt="Remy Sharp" src={user.user?.photoURL} />  {/* show the user photo if he logs in */}
                            </>
                        ):(

                            <>
                            <Avatar alt="Remy Sharp" className="avatar" src={icon2}  />

                            </>

                        )
                    }

                    <div >
                        
                    </div>
                
                    
                </div>
            </div>

            
        </div>
    )
}

export default File_Explorer
