<template lang="pug">
	div(class="device")
		div(class="device-icon" v-if="icon")
			i(v-bind:class="'fa fa-'+icon")
		span(class='device-name') {{ name }}
</template>

<script>
	module.exports = {
		props: {
			name: String,
			icon: String
		},
		data: function() {
			return {};
		}
	};
</script>

<style lang="scss">
	$device-border-color: #EEEEEE;

	.device {
		position: relative;
		text-align: center;
		border: 1px solid $device-border-color;
		padding: 15px;
		margin-bottom: 15px;
		border-radius: 2px;
	}

	.device-icon {
		font-size: 32px;
	}
</style>