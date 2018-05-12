<template>
	<p>{{ greeting }} a Vue Single File Component (SFC)!</p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	data: function() {
			return {
				greeting: 'I am '
			}
	}
});
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>
