<template>
	<div class="devices" v-if="devices">
		<device 
			:name="device.name"
			:icon="device.icon"
			v-for="device in devices"></device>
	</div>
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