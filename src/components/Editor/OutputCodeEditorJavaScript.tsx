import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditorJavaScript() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码（复杂） ${date}
// aiXCoder Output 1:
function generateCategoryTree(categoryList)  {
    var result = [];
    var categories = {};
    categoryList.forEach(function(category) {
      categories[category.key] = category;
    });

    for (var category in categories) {
      result.push({name: categories[category].name, key: categories[category].key, value: categories[category]});
    }

    return result;
}
  `;

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

export default OutputCodeEditorJavaScript;
