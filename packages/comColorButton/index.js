// 导入组件 组件必须声明name
import ComColorButton from './src/ColorButton.vue';

// 为组件提供install安装方法,供按需引入
ComColorButton.install = (Vue) => {
  Vue.component(ComColorButton.name, ComColorButton);
};

// 默认导出组件
export default ComColorButton;
