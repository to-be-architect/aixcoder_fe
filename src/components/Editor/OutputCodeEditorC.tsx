import React from 'react';
import Editor from '@monaco-editor/react';

const editorStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

function OutputCodeEditorC() {
  const date = new Date();
  const code = `// 根据函数名智能生成代码 ${date}
int quick_sort(int *a,int low,int high){
  if(low < high){  			//当两个下标不重合的时候开始排序
    int i = low; 			//把low 和 high 先存起来
    int j = high;
    int k = a[low]; 		//把最左边元素和其他数据相比，先存起来	
    while(i < j){ 			//此循环目的是对数据循环排序
      while(i < j && a[j] > k){ 	//找到右边比k小的数据
        j--;
      }
      if(i < j){ 					//然后将右边的数据赋值给左边　
        a[i++] = a[j];
      }

      while(i < j && a[i] < k){  //在左边寻找比k大的数据
        i++;
      }
      if(i < j){ 				//然后将左边的数据赋值给刚刚的a[j]
        a[j--] = a[i]; 			//因为刚刚是直接赋过去的，a[j]的值没有变
      }
    } 				//循环结束时，此子序列已经排序完成
    a[i] = k; 			//最后将k插入到序列中
    quick_sort(a,low,i-1); 		//递归调用左半边
    quick_sort(a,i+1,high);    //递归调用右半边

  }
  return 0;
}
  `;
  return (
    <div style={editorStyle}>
      <Editor defaultLanguage="go" defaultValue={code} theme={'light'} />
    </div>
  );
}

export default OutputCodeEditorC;
