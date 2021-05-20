<template>
  <div class="col-4 d-flex justify-content-center align-items-center">
    <img
      class="img-fluid rounded-circle"
      src="../assets/img/earth.gif"
      alt=""
      @click="harvest"
    />
  </div>
</template>

<script>
import { harvestService } from '../services/HarvestService'

export default {
  name: 'Earth',
  props: [],
  setup() {
    return {
      harvest() {
        harvestService.harvest()
      }
    }
  }
}
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
