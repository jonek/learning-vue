<template>
	<div class="tool">
		<table>
			<tr>
				<th></th>
				<th>Font Name</th>
				<th>Example 1</th>
				<th>Example 2</th>
			</tr>
			<tr
				v-for="(font, index) in fonts"
				:key="font.familyName"
				v-on:click="foo($event, index)"
				:class="selected(index)">
				<td class="index">{{ index }}</td>
				<td class="font-name">{{ font.familyName }}</td>
				<td :style="{ fontFamily: font.familyName }">{{ examplePhrase1 }}</td>
				<td :style="{ fontFamily: font.familyName }">{{ examplePhrase2 }}</td>
			</tr>
		</table>
		<div class="debug">
			<div>{{ selectedIndex }}</div>
			<div>{{ getSelectedFont() }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { FONTS } from "./fonts";

export default Vue.extend({
	data: function() {
			return {
				fonts: FONTS,
				examplePhrase1: '01234567890',
				examplePhrase2: '4 04',
				selectedIndex: 1,
			}
	},
	methods: {
		foo(e: any, index: number): void {
			console.log(e.target.tagName, index);
			this.selectedIndex = index;
		},
		selected(index: number): string {
			return index === this.selectedIndex ? 'selected' : '';
		},
		getSelectedFont(): any {
			return this.selectedIndex != -1 ? FONTS[this.selectedIndex] : {};
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
