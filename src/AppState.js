import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  humans: 0,
  clickModifier: 0,
  autoModifier: 0,
  clickUpgrades: [
    {
      id: 1,
      name: 'Lazer Beam',
      price: 100,
      quantity: 0,
      modifier: 10,
      imgUrl: 'https://scitechdaily.com/images/UCF-Laser-Beam-777x483.jpg',
      description: ''
    },
    {
      id: 2,
      name: 'Invasion',
      price: 1000,
      quantity: 0,
      modifier: 100,
      imgUrl: 'https://battlefieldearth.com/wp-content/uploads/2017/06/FlyingSaucers_AS_154743771.jpg',
      description: ''
    }
  ],
  autoUpgrades: [
    {
      id: 3,
      name: 'Landwalkers',
      price: 500,
      quantity: 0,
      modifier: 20,
      imgUrl: 'https://i.pinimg.com/736x/11/76/bb/1176bb9b5dad743f0db2bf758eef5e1f.jpg',
      description: ''
    },
    {
      id: 4,
      name: 'Experimental Incursion',
      price: 250,
      quantity: 0,
      modifier: 200,
      imgUrl: 'https://www.sciencenews.org/wp-content/uploads/2020/12/120920_TS_aliens_feat-1030x580.jpg',
      description: ''
    }]

})
