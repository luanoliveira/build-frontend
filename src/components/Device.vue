<template>
	<div class="device">
		<div class="device-icon" v-if="icon">
			<i :class="'fa fa-'+icon" aria-hidden="true"></i>
		</div>
		<span class="device-name">{{ name }}</span>
	</div>
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