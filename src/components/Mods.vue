<template>
  <div class="col-4 text-center mt-5 main-text">
    <h1>Mods</h1>
    <h5 class="mt-3">Click Modifiers</h5>
    <div v-for="upgrade in state.clickUpgrades" :key="upgrade.name">
      <h6>{{ upgrade.name }} x {{ upgrade.quantity }}</h6>
    </div>
    <h5 class="mt-3">Auto Modifiers</h5>
    <div v-for="upgrade in state.autoUpgrades" :key="upgrade.name">
      <h6>{{ upgrade.name }} x {{ upgrade.quantity }}</h6>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Mods',
  setup() {
    const state = reactive({
      clickUpgrades: computed(() => AppState.clickUpgrades),
      autoUpgrades: computed(() => AppState.autoUpgrades)
    })
    return {
      state
    }
  },
  components: {}
}
</script>
