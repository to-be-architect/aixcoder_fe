import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditorGo() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码 ${date}
// aiXCoder Output 3:
func MergeTwoBinaryTree(t1 TreeNode, t2 TreeNode) (TreeNode, error) {

\tif t1 == nil || t2 == nil {
\t  return t1, nil
  \t}

  \troot := t1
  \tleft := MergeTwoBinaryTree(t1.left, t2.left)
  \tright := MergeTwoBinaryTree(t1.right, t2.right)
  \t// 合并t1和t2
  \tif root.left!= nil {
  \t\troot.left = t1
  \t}
  \tif root.right!= nil {
  \t\troot.right = t2
  \t}

  \treturn root, nil
}
  `;

  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="go" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default OutputCodeEditorGo;
