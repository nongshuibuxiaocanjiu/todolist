<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.done }" v-for="item in arr" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created () {
    this.$store.state.list = this.arr
  },
  computed: {
    ...mapGetters(['arr'])
  },
  methods: {
    del (id) {
      this.$store.dispatch('main/delFn', id)
    }
  }
}
</script>
