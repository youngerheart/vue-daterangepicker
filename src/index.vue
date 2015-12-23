<template>
  <div v-el:drp></div>
</template>

<script type="text/ecmascript-6">
  module.exports = {
    props: ['lang', 'numberOfCalendars', 'type', 'time', 'date', 'range', 'minDate', 'maxDate', 'onSelect'],
    data() {
      return {
        drp: null
      };
    },
    watch: {
      'date'(value) {
        console.log(value);
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
      var {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, shortcuts} = this;
      var config = {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, shortcuts};
      var DateRangePicker = require('date-range-picker');
      this.drp = new DateRangePicker(this.$els.drp, config);
    }
  };
</script>
