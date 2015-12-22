module.exports = (Vue, prefix) => {
  Vue.component((prefix ? prefix + '-' : '') + 'daterangepicker', require('./index.vue'));
};
