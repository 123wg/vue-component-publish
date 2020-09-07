import Vue from 'vue';
import ComColorButton from 'chef-wang';
import 'chef-wang/lib/my-object.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(ComColorButton);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
