import Vue from 'vue'

Vue.config.productionTip = true;

let app = new Vue({
	el: '#app',
	data: {
		devices: [
			{
				name: 'Teste 1',
				icon: 'globe'
			},
			{
				name: 'Teste 2',
				icon: 'globe'
			}
		]
	}
})