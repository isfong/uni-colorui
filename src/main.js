import Vue        from 'vue'
import App        from './App'
import store      from './store';
import http       from './http';
import components from './pages/component/home.vue'
import plugin     from './pages/plugin/home.vue'
import basics     from './pages/basics/home.vue'
import cuCustom   from './components/colorui/cu-custom.vue'

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.component( 'basics', basics );
Vue.component( 'components', components );
Vue.component( 'plugin', plugin );
Vue.component( 'cu-custom', cuCustom );

App.mpType = 'app';

const app = new Vue( {
    ...App
} );
app.$mount();
