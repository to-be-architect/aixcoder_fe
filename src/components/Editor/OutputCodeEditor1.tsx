import React from 'react';
import Editor from '@monaco-editor/react';
import styles from './style/index.module.less';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditor1() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码（简单）${date}`;

  return (
    <div style={editorStyle}>
      <Editor
        defaultLanguage="go"
        defaultValue={code}
        theme={'light'}
        className={styles['monoca-editor']}
      />
    </div>
  );
}

export default OutputCodeEditor1;
