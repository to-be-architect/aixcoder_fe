import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditorC() {
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="c" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default InputCodeEditorC;

const code = `int quick_sort(int *a,int low,int high)`;
