import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditor3() {
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="python" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default InputCodeEditor3;

const code = `# print a 'hello world'`;
