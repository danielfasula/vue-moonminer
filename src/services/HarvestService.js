import { AppState } from '../AppState'

function collectAutoUpgrades() {
  AppState.autoUpgrades.forEach(u => {
    AppState.humans += (u.quantity * u.modifier)
  })
};
class HarvestService {
  setInterval() {
    setInterval(() => {
      collectAutoUpgrades()
    }, 3000)
    // (collectAutoUpgrades, 3000)
  }

  harvest() {
    if (AppState.clickModifier === 0) {
      AppState.humans++
    }
    AppState.humans += AppState.clickModifier
  }
}

export const harvestService = new HarvestService()
