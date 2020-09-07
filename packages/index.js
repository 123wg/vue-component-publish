import ComColorButton from './comColorButton';
// 存储组件列表
const components = [
  ComColorButton,
];

// 定义install方法,接受Vue作为参数,如果使用use注册插件,则所有的组件都将被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return;
  // 遍历所有组件
  components.map((item) => Vue.component(item.name, item));
};

// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue);
}

export default {
  install,
  ComColorButton,
};
