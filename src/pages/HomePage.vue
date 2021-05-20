<template>
  <div class="container-fluid">
    <div class="row mt-4 d-flex justify-content-around top">
      <Stats />
      <Earth />
      <Mods />
    </div>
    <div class="mt-5 row row-cols-1 row-cols-md-4 bottom">
      <PurchaseClick
        v-for="upgrade in state.click"
        :key="upgrade.name"
        :upgrade="upgrade"
      />
      <PurchaseAuto
        v-for="upgrade in state.auto"
        :key="upgrade.name"
        :upgrade="upgrade"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { harvestService } from '../services/HarvestService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      click: computed(() => AppState.clickUpgrades),
      auto: computed(() => AppState.autoUpgrades)
    })
    onMounted(() => {
      harvestService.setInterval()
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.top {
  height: 40%;
  align-items: center;
}
</style>
