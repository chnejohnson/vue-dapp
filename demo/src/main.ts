import { createApp } from 'vue'
import App from './App.vue'
import 'windi.css'
import './style.css'
import { VueDapp } from 'vue-dapp'

const app = createApp(App)

app.use(VueDapp, {
  80001: {
    chainId: '0x' + 80001,
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    chainName: 'Mumbai',
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    nativeCurrency: {
      name: 'Mumbai',
      decimals: 18,
      symbol: 'MATIC',
    },
  },
})

app.mount('#app')
