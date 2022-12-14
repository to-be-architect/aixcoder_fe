import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditorGo() {
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="go" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default InputCodeEditorGo;

const code = `func MergeTwoBinaryTree(t1 TreeNode, t2 TreeNode) (TreeNode, error)`;
