<template>
	<div class="tool">
		<table>
			<tr>
				<th></th>
				<th>color 1</th>
				<th>color 2</th>
				<th>color 3</th>
				<th>color 4</th>
			</tr>
			<tr
				v-for="(palette, index) in palettes"
				:key="palette[0]"
				v-on:click="foo($event, index)"
				:class="selected(index)">
				<td class="index">{{ index }}</td>
				<td :style="{ background: palette[0] }"></td>
				<td :style="{ background: palette[1] }"></td>
				<td :style="{ background: palette[2] }"></td>
				<td :style="{ background: palette[3] }"></td>
			</tr>
		</table>
		<div class="debug">
			<div>index: {{ selectedIndex }}</div>
			<pre>{{ getSelectedPalette() }}</pre>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { PALETTES } from "./palettes";

export default Vue.extend({
	data: function() {
			return {
				palettes: PALETTES,
				foregroundIndex: 0,
				backgroundIndex: 3,
				selectedIndex: 1,
			}
	},
	methods: {
		foo(e: any, index: number): void {
			console.log(e.target.tagName, index);
			this.selectedIndex = index;
			this.$emit('palette-selected', this.getSelectedPalette());
		},
		selected(index: number): string {
			return index === this.selectedIndex ? 'selected' : '';
		},
		getSelectedPalette(): any {
			return this.selectedIndex != -1 ? this.palettes[this.selectedIndex] : [];
		}
	}
});
</script>

<style scoped>
	table {
		/* border: 1px solid red; */
		border-collapse: collapse;
		caret-color: transparent;
		font-family: 'Roboto mono';
	}
	th, td {
		padding: 0.5em;
	}
	th {
		background-color: lightblue;
		cursor: initial;
	}
	tr:hover {
    background-color: rgb(241, 241, 241);
		cursor: pointer;
	}
	.selected, .selected:hover {
		background-color: lightGrey;
		cursor: default;
	}
	p {
		font-size: 2em;
		text-align: center;
	}
	pre {
		margin: 0;
	}
	.font-name {
		font-weight: normal;
		text-align: right;
	}
	.tool {
		padding: 2em;
	}
	.debug {
		margin-top: 1em;
		color: rgb(236, 72, 108);
	}
	.index {
		text-align: right;
	}
</style>
