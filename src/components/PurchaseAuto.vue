<template>
  <div class="col">
    <div class="card h-100">
      <img height="150" :src="upgrade.imgUrl" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">
          {{ upgrade.name }}
        </h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer d-flex justify-content-around">
        <h5 class="mt-1">Cost: {{ upgrade.price }}</h5>
        <button class="btn" type="button" @click="purchase">BUY</button>
      </div>
    </div>
  </div>
</template>

<script>
import { upgradesService } from '../services/UpgradesService'
export default {
  name: 'PurchaseAuto',
  props: {
    upgrade: { type: Object, required: true }
  },
  setup(props) {
    return {
      purchase() {
        upgradesService.purchaseAuto(props.upgrade)
      }
    }
  }
}
</script>
