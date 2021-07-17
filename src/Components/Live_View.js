import React from 'react';
import '../Css/live_view.css';

//we use the iframe tag here to print out the content in the website

function Live_View({doc}) {
    
    return (
        <div className="live_view">
            
            <div className="live__view">
                <iframe
                    srcDoc={doc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allowfullscreen={true}
                    className="i_frame"
                />

            </div>
            
             
        </div>
    )
}
 
export default Live_View
