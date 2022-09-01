import Mock from 'mockjs';
import setupMock from '@/utils/setupMock';

const haveReadIds = [];
const getMessageList = () => {
  return [
    {
      id: 1,
      type: 'message',
      title: '张一鸣',
      subTitle: '的私信',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
      content: '审批请求已发送，请查收',
      time: '今天 12:30:01',
    },
    {
      id: 2,
      type: 'message',
      title: '梁汝波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content:
        '此处 bug 已经修复，如有问题请查阅文档或者继续 github 提 issue～',
      time: '今天 12:30:01',
    },
    {
      id: 3,
      type: 'message',
      title: '梁汝波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:20:01',
    },

    {
      id: 4,
      type: 'todo',
      title: '域名服务',
      content: '内容质检队列于 2021-12-01 19:50:23 进行变更，请重新',
      tag: {
        text: '未开始',
        color: 'gray',
      },
    },
    {
      id: 5,
      type: 'todo',
      title: '内容审批通知',
      content: '周受资提交于 2021-11-05，需要您在 2011-11-07之前审批',
      tag: {
        text: '进行中',
        color: 'arcoblue',
      },
    },
    {
      id: 6,
      type: 'notice',
      title: '质检队列变更',
      content: '您的产品使用期限即将截止，如需继续使用产品请前往购…',
      tag: {
        text: '即将到期',
        color: 'red',
      },
    },
    {
      id: 7,
      type: 'notice',
      title: '规则开通成功',
      subTitle: '',
      avatar: '',
      content: '内容屏蔽规则于 2021-12-01 开通成功并生效。',
      tag: {
        text: '已开通',
        color: 'green',
      },
    },
  ].map((item) => ({
    ...item,
    status: haveReadIds.indexOf(item.id) === -1 ? 0 : 1,
  }));
};

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/message/list'), () => {
      return getMessageList();
    });

    Mock.mock(new RegExp('/api/message/read'), (params) => {
      const { ids } = JSON.parse(params.body);
      haveReadIds.push(...(ids || []));
      return true;
    });
  },
});
