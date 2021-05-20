<template>
  <div class="col-4 text-center mt-5 main-text">
    <h1>Stats</h1>
    <h3 class="mt-3">Humans Harvested: {{ state.humans }}</h3>
    <h3 class="my-4">Click Modifiers: {{ state.clickModifier }}</h3>
    <h3>Auto Modifiers: {{ state.autoModifier }}</h3>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Stats',
  props: [],
  setup() {
    const state = reactive({
      humans: computed(() => AppState.humans),
      clickModifier: computed(() => AppState.clickModifier),
      autoModifier: computed(() => AppState.autoModifier)
    })
    return {
      state
    }
  }
}
</script>
