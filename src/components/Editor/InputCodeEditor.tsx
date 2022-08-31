import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditor() {
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="go" defaultValue={code} theme={'vs-dark'} />
    </div>
  );
}

export default InputCodeEditor;

const code = `func HelloWorld()`;
