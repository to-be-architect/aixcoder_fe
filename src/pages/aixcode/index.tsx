import React, { useState } from 'react';
import InputCodeEditor from '@/components/Editor/InputCodeEditor';
import AIX1OutputCodeEditor from '@/components/Editor/AIX1OutputCodeEditor';
import AIX2OutputCodeEditor from '@/components/Editor/AIX2OutputCodeEditor';
import {
  Alert,
  Button,
  Divider,
  Grid,
  Space,
  Spin,
} from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';

const Row = Grid.Row;
const Col = Grid.Col;

export default function AIXCoder() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const [display1, setDisplay1] = useState('none');
  const [display2, setDisplay2] = useState('none');

  return (
    <div>
      <h3>AIXCoder智能生成代码</h3>
      <InputCodeEditor />
      <Divider />
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col span={12}>
          <Space size="medium">
            <Button
              onClick={() => handleGenerateCode1()}
              type="primary"
              loading={loading1}
              size="large"
            >
              AIX1 生成
            </Button>
            <Alert
              style={{ display: display1 }}
              type="success"
              content={text1}
            />
          </Space>

          <Divider />

          <Spin loading={loading1}>
            <AIX1OutputCodeEditor />
          </Spin>
        </Col>

        <Col span={12}>
          <Space size="medium">
            <Button
              onClick={() => handleGenerateCode2()}
              type="primary"
              loading={loading2}
              size="large"
            >
              AIX2 生成
            </Button>

            <Alert
              style={{ display: display2 }}
              type="success"
              content={text2}
            />
          </Space>

          <Divider />

          <Spin loading={loading2}>
            <AIX2OutputCodeEditor />
          </Spin>
        </Col>
      </Row>
      <Divider />
    </div>
  );

  /**
   * 处理事件函数
   */
  function handleGenerateCode1() {
    setLoading1(true);

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

    const start = Date.now();
    // 发送 post 查询请求
    axios
      .post(`http://127.0.0.1:8888/aix1`, body)
      .then((res) => {
        console.log(res.data);
        y.setValue(res.data);

        setLoading1(false);

        const end = Date.now();
        const usingTime = (end - start) / 1000;
        setText1(`Using:${usingTime}s`);
        setDisplay1('');
      })
      .finally(() => {
        // do nothing
      });
  }

  /**
   * 处理事件函数
   */
  function handleGenerateCode2() {
    setLoading2(true);

    // 获取Monaco实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    const x = models[0];
    const y = models[2]; // 第3个editor
    console.log(x.id);
    const xs = x.getValue();
    const body = {
      x: xs,
    };
    const start = Date.now();
    // 发送 post 查询请求
    axios
      .post(`http://127.0.0.1:8888/aix2`, body)
      .then((res) => {
        console.log(res.data);
        y.setValue(res.data);

        setLoading2(false);

        const end = Date.now();
        const usingTime = (end - start) / 1000;
        setText2(`Using:${usingTime}s`);
        setDisplay2('');
      })
      .finally(() => {
        // do nothing
      });
  }
}
