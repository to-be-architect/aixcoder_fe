import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditorJavaScript() {
  return (
    <div style={editorStyle}>
      <Editor
        defaultLanguage="javascript"
        defaultValue={code}
        theme={'light'}
      />
    </div>
  );
}

export default InputCodeEditorJavaScript;

const code = `function generateCategoryTree(categoryList)`;
