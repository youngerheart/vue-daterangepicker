<template>
  <div v-el:drp></div>
</template>

<script type="text/ecmascript-6">
  module.exports = {
    props: {
      lang: {type: String},
      numberOfCalendars: {type: Number},
      type: {type: String},
      time: {type: Boolean},
      date: {type: Object},
      range: {type: Object},
      maxDate: {type: Object},
      onSelect: {type: Object}
    },
    data() {
      return {
        drp: null
      };
    },
    watch: {
      'type'(value) {
        if(value === 'single') {
          if(this.date) this.drp.set('date', this.date);
          else this.drp.clear();
        }
        else if (value === 'range' || value === 'terminal') {
          if(this.range) this.drp.set('range', this.range);
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
