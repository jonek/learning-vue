import Vue from "vue";
import MyCanvas from './MyCanvas';
import FontSelector from './components/FontSelector.vue';
import PaletteSelector from './components/PaletteSelector.vue';
import { Font } from './components/fonts';
import './index.css';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <myCanvas message="Foo bar baz!" :font="font" :background="palette[0]" :foreground="palette[3]"></myCanvas>
        <div class="tools">
            <font-selector v-on:font-selected="updateFont($event)"></font-selector>
            <palette-selector v-on:palette-selected="updatePalette($event)"></palette-selector>
        </div>
    </div>`,
    data: {
        font: <Font> {},
        palette: <string[]> []
    },
    methods: {
        updateFont(font: Font) {
            this.font = font;
            this.log(font);
        },
        updatePalette(palette: string[]) {
            this.palette = palette;
            this.log(palette);
        },
        log(e: any): void {
            console.log(`got event: ${JSON.stringify(e)}`);
        }
    },
    components: {
        'myCanvas': MyCanvas,
        'fontSelector': FontSelector,
        'paletteSelector': PaletteSelector
    }
});