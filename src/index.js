import Button from './components/button';
import Icon from './components/icon';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Scrollbar from './components/scrollbar';
import Notification from './components/notification';
import Select from './components/select';
import Message from './components/message';

import './styles/index.scss';

const components = {
  Button,
  Icon,
  Radio,
  RadioGroup: Radio.Group,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Scrollbar,
  Select,
  Option: Select.Option,
};

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    let component = components[key];
    Vue.component(component.name, component);
  });

  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

let obj = {
  install,
  Notification,
  Message
};

Object.keys(components).forEach((key) => {
  let component = components[key];
  obj[key] = component;
});

export default obj;