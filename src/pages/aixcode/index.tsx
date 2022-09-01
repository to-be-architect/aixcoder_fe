import React, { useState } from 'react';
import InputCodeEditor1 from '@/components/Editor/InputCodeEditor1';
import InputCodeEditor3 from '@/components/Editor/InputCodeEditor3';
import OutputCodeEditor1 from '@/components/Editor/OutputCodeEditor1';
import OutputCodeEditor3 from '@/components/Editor/OutputCodeEditor3';
import { Alert, Button, Card, Divider, Spin } from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';

export default function AIXCoder() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const [display1, setDisplay1] = useState('none');
  const [display2, setDisplay2] = useState('none');
  const [display3, setDisplay3] = useState('none');

  return (
    <div>
      <h3>aiXCoder智能生成代码</h3>

      {/***************************************************************************************************/}

      <Divider />

      <Card title={'请输入函数签名:'}>
        <InputCodeEditor1 />

        <Divider />

        <Button
          onClick={() => handleGenerateCode1()}
          type="primary"
          loading={loading1}
          size="large"
        >
          根据函数签名智能生成代码
        </Button>
        <Alert style={{ display: display1 }} type="success" content={text1} />

        <Divider />

        <Spin loading={loading1} tip={'生成代码中...'}>
          <OutputCodeEditor1 />
        </Spin>
      </Card>

      {/***************************************************************************************************/}

      <Divider />

      <Card title={'请输入函数功能注释:'}>
        <InputCodeEditor3 />

        <Divider />

        <Button
          onClick={() => handleGenerateCode3()}
          type="primary"
          loading={loading3}
          size="large"
        >
          根据自然语言智能生成代码
        </Button>

        <Alert style={{ display: display3 }} type="success" content={text3} />

        <Divider />

        <Spin loading={loading3} tip={'生成代码中...'}>
          <OutputCodeEditor3 />
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
      .post(`http://127.0.0.1:8888/aix1`, body)
      .then((res) => {
        console.log(res.data);
        setLoading1(false);
        const end = Date.now();
        const usingTime = (end - start) / 1000;
        setText1(`Using:${usingTime}s`);
        setDisplay1('');

        y.setValue(res.data);
      })
      .finally(() => {
        // do nothing
      });
  }

  /**
   * 处理事件函数2
   */
  // function handleGenerateCode2() {
  //     setLoading2(true);
  //
  //     // 获取Monaco实例
  //     const editorRef = loader.__getMonacoInstance().editor;
  //     const models = editorRef.getModels();
  //     const x = models[2]; // 第3个editor
  //     const y = models[3]; // 第4个editor
  //     console.log(x.id);
  //     const xs = x.getValue();
  //     const body = {
  //         x: xs,
  //     };
  //     const start = Date.now();
  //     // 发送 post 查询请求
  //     axios
  //         .post(`http://127.0.0.1:8888/aix2`, body)
  //         .then((res) => {
  //             console.log(res.data);
  //             y.setValue(res.data);
  //
  //             setLoading2(false);
  //
  //             const end = Date.now();
  //             const usingTime = (end - start) / 1000;
  //             setText2(`Using:${usingTime}s`);
  //             setDisplay2('');
  //         })
  //         .finally(() => {
  //             // do nothing
  //         });
  // }

  /**
   * 处理事件函数3
   */
  function handleGenerateCode3() {
    setLoading3(true);

    // 获取Monaco实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    const x = models[2];
    const y = models[3];
    console.log(x.id);
    const xs = x.getValue();
    const body = {
      x: xs,
    };
    const start = Date.now();
    // 发送 post 查询请求
    axios
      .post(`http://127.0.0.1:8888/aix3`, body)
      .then((res) => {
        console.log(res.data);
        setLoading3(false);
        const end = Date.now();
        const usingTime = (end - start) / 1000;
        setText3(`Using:${usingTime}s`);
        setDisplay3('');

        y.setValue(res.data);
      })
      .finally(() => {
        // do nothing
      });
  }
}
