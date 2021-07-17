import React from 'react';
import '../Css/editor.css';
import 'codemirror/lib/codemirror.css';//used the codemirror library to render out text in specified formats
import 'codemirror/theme/yonce.css';//theme used is yonce 
import 'codemirror/mode/xml/xml'//imported the html editor
import 'codemirror/mode/javascript/javascript';//javascript editor
import 'codemirror/mode/css/css';//css editor
import { Controlled as ControlledEditor } from 'react-codemirror2';//used the controlled editor



function Editor({name,language,value,onChange}) {  {/*passed on the props to know which editor are we working on*/}
    
    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className="editor">
            <div className="editor_name">{name}</div>

            <div className="main_editor">
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}// gets the value from the props
                    className='CodeMirror'  //formatted the width and height of the editor*
                    options={{
                    lineWrapping: true,//line wrapping
                    lint: true,
                    mode: language,// tells which language we are working on
                    theme: 'yonce',
                    lineNumbers: true//enabled line numbers 
                    }}
                />
            </div>
        </div>
    )
}

export default Editor
