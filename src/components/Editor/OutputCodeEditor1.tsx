import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditor1() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码 ${date}
// aiXCoder Output 3:
func MergeTwoBinaryTree(t1 TreeNode, t2 TreeNode) (TreeNode, error)  {
\tif t1 == nil {
\t\treturn nil, nil
\t}
\tif t2 == nil {
\t\treturn t1, nil
\t}
\tvar t1Node, t2Node *TreeNode
\tif t1.Left!= nil {
\t\tt1Node = t1.Left
\t\tt1.Left = nil
\t}
\tif t2.Right!= nil {
\t\tt2Node = t2.Right
\t\tt2.Right = nil
\t}
\tif t1Node == nil {
\t\treturn t2Node, nil
\t}
\tif t2Node == nil {
\t\treturn t1Node, nil
\t}
\tt1Node.Right = MergeTwoBinaryTree(t1Node.Right, t2Node.Right)
\tt1Node.Left = MergeTwoBinaryTree(t1Node.Left, t2Node.Left)
\treturn t1Node, nil
}
  `;

  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="go" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default OutputCodeEditor1;
