import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditorKotlin() {
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="kotlin" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default InputCodeEditorKotlin;

const code = `fun visitTreeNode(root: TreeNode, visitor: (TreeNode) -> Unit) {`;
