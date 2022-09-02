import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '60px',
  border: '1px solid #ccc',
};

function InputCodeEditorJava() {
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="java" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default InputCodeEditorJava;

const code = `public CatagoryTreeNode BuildCategoryTree(List<CatagoryTreeNode> cateList,  String parentId){`;
