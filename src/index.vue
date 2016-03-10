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
      date(value) {
        if(this.type === 'single') {
          if(value) this.drp.set('date', value);
          else this.drp.clear();
        }
      },
      range(value) {
        if(this.type === 'range' || this.type === 'terminal') {
          if(value) this.drp.set('range', value);
          else this.drp.clear();
        }
      },
      'drp.calendar.type'(value) {
        this.calendarType = value;
      }
    },
    ready() {
      var {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, shortcuts, dimension, calendarType} = this;
      var config = {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, calendarType};
      var walk = (that, el) => {
        if(!that) return null;
        if(that.$els[el]) return that.$els[el];
        else return walk(that.$parent, el);
      }
      if(shortcuts && shortcuts.el) {
        config.shortcuts = {el: walk(this.$parent, shortcuts.el)};
        if(shortcuts.btns) config.shortcuts.btns = shortcuts.btns;
      }
      if(dimension && dimension.el) {
        config.dimension = {el: walk(this.$parent, dimension.el)};
        if(dimension.btns) config.dimension.btns = dimension.btns;
      }
      var DateRangePicker = require('date-range-picker');
      this.drp = new DateRangePicker(this.$els.drp, config);
    }
  };
</script>
