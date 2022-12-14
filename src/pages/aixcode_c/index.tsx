import React, { useState } from 'react';
import InputCodeEditorC from '@/components/Editor/InputCodeEditorC';
import { Alert, Button, Card, Divider, Spin } from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';
import OutputCodeEditorC from '@/components/Editor/OutputCodeEditorC';

export default function AIXCoder() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [text, setText] = useState('');

  const [display, setDisplay] = useState('none');

  return (
    <div>
      <h3>aiXCoder智能生成代码</h3>

      {/***************************************************************************************************/}

      <Divider />

      <Card title={'请输入函数签名:'}>
        <InputCodeEditorC />

        <Divider />

        <Button
          onClick={() => handleGenerateCode()}
          type="primary"
          loading={loading}
          size="large"
          status="success"
        >
          AI 生成代码
        </Button>

        <Alert style={{ display: display }} type="success" content={text} />

        <Divider />

        <Spin loading={loading || loading2} tip={'生成代码中...'}>
          <OutputCodeEditorC />
        </Spin>
      </Card>
    </div>
  );

  /**
   * 处理事件函数1
   */
  function handleGenerateCode() {
    setLoading(true);

    // 获取Monaco实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    const x = models[0]; // 第1个editor
    const y = models[1]; // 第2个editor
    console.log(x.id);
    const xs = x.getValue();
    const body = {
      x: xs,
    };

    const start = Date.now();
    // 发送 post 查询请求
    axios
      .post(`http://127.0.0.1:9888/aix`, body)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        const end = Date.now();
        const usingTime = (end - start) / 1000;
        setText(`Using:${usingTime}s`);
        setDisplay('');

        y.setValue(`${xs}${res.data}`);
      })
      .finally(() => {
        // do nothing
      });
  }
}
