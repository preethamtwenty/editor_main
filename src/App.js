import React,{useEffect, useState} from 'react';
import './App.css'
import File_Explorer from './Components/File_Explorer'//sidebar 
import Editor from './Components/Editor';//main editor
import Live_View from './Components/Live_View';
import Intro from './Components/Intro'; //first page that appears
import Header from './Components/header'//main header
import Header2 from './Components/Header2';//header for index.js,index.html,index.css in responsive design
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";//react router dom imports



function App() {
  const[html,setHtml]=useState('')//html data
  const[js,setJs]=useState('')//js data
  const[css,setCss]=useState('')//css data


  //putting the data in this document and sending it to iframe to render this out according to the format 
  //this is basically a html template 
  const doc=`  
    <html>
        <style>${css}</style>
      
        <body>${html}</body>
       
        <script>${js}</script>
        
        
    </html>`
    
    //storing the data in the local storage
    
      useEffect(() => {
        localStorage.setItem('preetham_h', JSON.stringify(html))
        localStorage.setItem('preetham_c', JSON.stringify(css))
        localStorage.setItem('preetham_j', JSON.stringify(js))
    }, [html,css,js])

    

    


   


  return (
    <Router>
      <Switch>
       
      <div className="App">
     
     
          <File_Explorer/>{/*sidebar*/}

    
        
        <div className="app_2">
          <Header html={html} css={css} js={js}/>
          <Header2 />
          <Route path="/" exact>
          <Intro/>
          </Route>
          
          <Route path="/html">
              {/*this is the html editor*/}
              <Editor name="HTML" language="xml" value={html} onChange={setHtml}/>
              <Live_View doc={doc}/>
          </Route>


          <Route path="/css">
            {/*this is the css editor*/}
            
              <Editor name="CSS" language="css" value={css} onChange={setCss}/>
              <Live_View doc={doc}/>
          </Route>


          <Route path="/js">
              {/*this is the js editor*/}
              <Editor name="Javascript" language="javascript" value={js} onChange={setJs}/>
              <Live_View doc={doc}/> {/*this is the live view per page*/}
          </Route>


          <Route path="/live">
              <Live_View doc={doc}/>
          </Route>
          
          
        </div>
        
      
      
    </div>
    

      </Switch>
    </Router>
    
    
  );
}

export default App;
