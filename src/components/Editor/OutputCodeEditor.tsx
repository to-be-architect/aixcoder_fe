import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '800px',
  border: '1px solid #ccc',
};

function OutputCodeEditor() {
  const date = new Date();
  const code = `// AIXCoder智能生成代码 ${date}`;

  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="go" defaultValue={code} theme={'vs-dark'} />
    </div>
  );
}

export default OutputCodeEditor;
