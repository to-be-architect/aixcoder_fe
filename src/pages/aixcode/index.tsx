import React from 'react';
import InputCodeEditor from '@/components/Editor/InputCodeEditor';
import OutputCodeEditor from '@/components/Editor/OutputCodeEditor';
import { Button, Divider, Space } from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';

export default function AIXCoder() {
  return (
    <div>
      <h3>AIXCoder智能生成代码</h3>
      <InputCodeEditor />
      <Divider />

      <Space size="medium">
        <Button onClick={() => handleGenerateCode1()} type="primary">
          AIX1 生成
        </Button>

        <Button onClick={() => handleGenerateCode2()} type="primary">
          AIX2 生成
        </Button>
      </Space>

      <Divider />

      <OutputCodeEditor />

      <Divider />
    </div>
  );

  /**
   * 处理事件函数
   */
  function handleGenerateCode1() {
    // 获取Monaco实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    const x = models[0];
    const y = models[1];
    console.log(x.id);
    const xs = x.getValue();
    const body = {
      x: xs,
    };

    // 发送 post 查询请求
    axios
      .post(`http://127.0.0.1:8888/aix1`, body)
      .then((res) => {
        console.log(res.data);
        y.setValue(res.data);
      })
      .finally(() => {
        // do nothing
      });
  }

  /**
   * 处理事件函数
   */
  function handleGenerateCode2() {
    // 获取Monaco实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    const x = models[0];
    const y = models[1];
    console.log(x.id);
    const xs = x.getValue();
    const body = {
      x: xs,
    };

    // 发送 post 查询请求
    axios
      .post(`http://127.0.0.1:8888/aix2`, body)
      .then((res) => {
        console.log(res.data);
        y.setValue(res.data);
      })
      .finally(() => {
        // do nothing
      });
  }
}
