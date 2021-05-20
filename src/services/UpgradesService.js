import Swal from 'sweetalert2'
import { AppState } from '../AppState'

class UpgradesService {
  purchaseClick(upgrade) {
    if (AppState.humans >= upgrade.price) {
      const upgradeIndex = AppState.clickUpgrades.findIndex(u => u.id === upgrade.id)
      AppState.humans -= upgrade.price
      AppState.clickModifier += upgrade.modifier
      AppState.clickUpgrades[upgradeIndex].quantity++
      AppState.clickUpgrades[upgradeIndex].price *= 2
      Swal.fire({
        icon: 'success',
        title: 'Purchased!'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'BRING ME MORE HUMANS!'
      })
    }
  }

  purchaseAuto(upgrade) {
    if (AppState.humans >= upgrade.price) {
      const upgradeIndex = AppState.autoUpgrades.findIndex(u => u.id === upgrade.id)
      AppState.humans -= upgrade.price
      AppState.autoModifier += upgrade.modifier
      AppState.autoUpgrades[upgradeIndex].quantity++
      AppState.autoUpgrades[upgradeIndex].price *= 2
      Swal.fire({
        icon: 'success',
        title: 'Purchased!'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'BRING ME MORE HUMANS!'
      })
    }
  }
}

export const upgradesService = new UpgradesService()
