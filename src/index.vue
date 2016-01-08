<template>
  <div v-el:drp></div>
</template>

<script type="text/ecmascript-6">
  module.exports = {
    props: ['lang', 'numberOfCalendars', 'type', 'time', 'date', 'range', 'minDate', 'maxDate', 'onSelect', 'shortcuts', 'dimension', 'calendarType'],
    data() {
      return {
        drp: null
      };
    },
    watch: {
      'date'(value) {
        if(this.type === 'single') {
          if(value) this.drp.set('date', value);
          else this.drp.clear();
        }
      },
      'range'(value) {
        if(this.type === 'range' || this.type === 'terminal') {
          if(value) this.drp.set('range', value);
          else this.drp.clear();
        }
      }
    },
    ready() {
      var {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, shortcuts, dimension, calendarType} = this;
      var config = {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, calendarType};
      if(shortcuts && shortcuts.el) {
        config.shortcuts = {
          el: this.$parent.$els[shortcuts.el]
        };
        if(shortcuts.btns) config.shortcuts.btns = shortcuts.btns;
      }
      if(dimension && dimension.el) {
        config.dimension = {
          el: this.$parent.$els[dimension.el],
          btns: dimension.btns
        };
        if(dimension.btns) config.dimension.btns = dimension.btns;
      }
      var DateRangePicker = require('date-range-picker');
      this.drp = new DateRangePicker(this.$els.drp, config);
    }
  };
</script>
