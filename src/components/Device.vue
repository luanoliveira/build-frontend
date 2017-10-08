<template>
	<div class="device">
		<span class="device-name">{{ name }}</span>
	</div>
</template>

<script>
	module.exports = {
		props: {
			name: String
		},
		data: function() {
			return {};
		}
	};
</script>

<style lang="scss">
	.device {
		border: 1px solid red;
		padding: 15px;
		margin-bottom: 15px;
		border-radius: 2px;
	}
</style>