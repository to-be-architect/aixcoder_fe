import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditorJava() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码 ${date}`;

  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="java" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default OutputCodeEditorJava;
