<template lang="pug">
	div(class="devices" v-if="devices")
		device(:name="device.name" :icon="device.icon" v-for="device in devices")
</template>

<script>
	module.exports = {
		props: {
			devices: Array
		},
		data: function() {
			return {};
		}
	};
</script>