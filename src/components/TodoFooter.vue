<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ $store.state.main.list.length }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: highlight === 'all' }"
          href="javascript:;"
          @click="changeFn('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: highlight === 'no' }"
          href="javascript:;"
          @click="changeFn('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: highlight === 'yes' }"
          href="javascript:;"
          @click="changeFn('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="$store.state.main.list = []">
      清除已完成
    </button>
  </footer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('main')

export default {
  computed: {
    ...mapState(['highlight', 'list'])
  },
  created () {
    console.log(this.highlight, this.list)
  },
  methods: {
    changeFn (val) {
      this.$store.dispatch('main/changeFnn', val)
    }
  }
}
</script>
