import React, { useState } from 'react';
import InputCodeEditorPython from '@/components/Editor/InputCodeEditorPython';
import OutputCodeEditorPython from '@/components/Editor/OutputCodeEditorPython';
import { Alert, Button, Card, Divider, Spin } from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';

export default function AIXCoder() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [text1, setText1] = useState('');
  // const [text2, setText2] = useState('');

  const [display1, setDisplay1] = useState('none');
  // const [display2, setDisplay2] = useState('none');

  return (
    <div>
      <h3>aiXCoder智能生成代码</h3>

      {/***************************************************************************************************/}

      <Divider />

      <Card title={'请输入函数签名:'}>
        <InputCodeEditorPython />

        <Divider />

        <Button
          onClick={() => handleGenerateCode1()}
          type="primary"
          loading={loading1}
          size="large"
          status="success"
        >
          AI 生成代码
        </Button>

        <Alert style={{ display: display1 }} type="success" content={text1} />

        <Divider />

        <Spin loading={loading1 || loading2} tip={'生成代码中...'}>
          <OutputCodeEditorPython />
        </Spin>
      </Card>
    </div>
  );

  /**
   * 处理事件函数1
   */
  function handleGenerateCode1() {
    setLoading1(true);

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
        setLoading1(false);
        const end = Date.now();
        const usingTime = (end - start) / 1000;
        setText1(`Using:${usingTime}s`);
        setDisplay1('');

        y.setValue(`${xs}${res.data}`);
      })
      .finally(() => {
        // do nothing
      });
  }
}
