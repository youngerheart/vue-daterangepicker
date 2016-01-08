# vue-daterangepicker
simple daterangepicker for vue, base on [daterangepicker](https://github.com/ElemeFE/daterangepicker)

## DEMO
[Click here](http://youngerheart.github.io/vue-daterangepicker/)

## What achieved 
1. calendar component base on moment.js
2. date simple picker
3. date range picker
4. date terminal picker

**compatibility for IE**

* Because of using browserify, if you don't need hour and minute picker, it supports IE9.
* If you need hour and minute picker, because of using range input, it supports IE10.

## Usage

This component relies on moment and moment-range, so you should include them first

      $ npm install vue-daterangepicker

Include js in `/dist` by tag , you can also require js by `require('date-range-picker')`

      // You should init the VueDateRangePicker (with a prefix)
      VueDateRangePicker(Vue, 'v');
      // set initial props && methods
      new Vue({el: '#el',data: {
        moment: moment,
        range1: moment.range(['2015-10-01 23:33', '2015-10-04']),
        range2: moment.range(['2015-10-03', '2015-10-07']),
        date: moment()
      }, methods: {
        onSelect1: function(date) {this.$els.singlevalue.innerHTML = date.format('YYYY-MM-DD HH:mm');},
        setSingleTime: function() {this.date = moment();},
        clearSingleTime: function() {this.date = null;}
      }});

      // use components
      <v-daterangepicker
        v-ref="drpsingle"
        lang="zh-cn"
        :number-of-calendars="1"
        calendar-type="date"
        type="single"
        :time="true"
        :date="date"
        :max-date="moment()"
        :on-select="onSelect1"
        :shortcuts="{el: 'shortcuts', btns: [...]}"
        :dimension="{el: 'dimension'}",
      ></v-daterangepicker>

## Develop

      $ git clone && make dev
