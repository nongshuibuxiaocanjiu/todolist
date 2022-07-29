<template>
  <header class="header">
    <h1 :style="{ color: $store.state.color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="todo"
      @keydown.enter="enterFn"
    />
  </header>
</template>

<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    enterFn () {
      if (this.todo.length === 0) {
        return alert('请输入内容')
      }
      // console.log(11)
      this.$store.dispatch('main/addFn', this.todo)
      this.todo = ''
    }
  }
}
</script>
