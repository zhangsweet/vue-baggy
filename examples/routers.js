import Vue from 'vue';
import VueRouter from 'vue-router';

import Button from './pages/button';
import Icon from './pages/icon';
import Radio from './pages/radio';
import Checkbox from './pages/checkbox';
import Scrollbar from './pages/scrollbar';
import Notification from './pages/notification';
import Select from './pages/select';
import Message from './pages/message';

Vue.use(VueRouter);

const routes = [{
  path: '/button',
  component: Button
}, {
  path: '/icon',
  component: Icon
}, {
  path: '/radio',
  component: Radio
}, {
  path: '/checkbox',
  component: Checkbox
}, {
  path: '/scrollbar',
  component: Scrollbar
}, {
  path: '/notification',
  component: Notification
}, {
  path: '/select',
  component: Select
}, {
  path: '/message',
  component: Message
}];

const router = new VueRouter({
  routes 
});

export default router;