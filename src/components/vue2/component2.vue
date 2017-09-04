<template>
  <div>
    <h1>{{ msg }}</h1>
    <a @click="increment()">Counter: {{ counter }}</a>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'component2',
  data () {
    return {
      msg: 'Vue 2',
      counter: 0
    }
  },
  beforeCompile: function() {
    this.msg += ' beforeCompile'
  },
  compiled: function() {
    this.msg += ' compile'
  },
  attached: function() {
    this.msg += ' attached'
  },
  ready: function() {
    this.msg += ' ready'
  },
  mounted: function() {
    this.msg += ' mounted'
  },
  methods: {
    increment: function() {
      this.counter++
    }
  }
}
</script>
