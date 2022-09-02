import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditorKotlin() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码（复杂） ${date}
fun visitTreeNode(root: TreeNode, visitor: (TreeNode) -> Unit) {
        if (!root) { return }
        visitor(root);
        root.left!= null? visitTreeNode(root.left, visitor) : null;
        root.right!= null? visitTreeNode(root.right, visitor) : null;
}  
`;

  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="kotlin" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default OutputCodeEditorKotlin;
