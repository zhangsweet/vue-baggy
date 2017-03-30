import Vue from 'vue';
let MessageObj = Vue.extend(require('./message.vue'));

let Message = function(options) {
  let instance = new MessageObj({
    data: options
  });

  let vm = instance.$mount();
  document.body.appendChild(vm.$el);
};

export default Message;