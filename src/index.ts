import Vue from "vue";
import MyComponent from './MyComponent';
import FontSelector from './components/FontSelector.vue';
import PaletteSelector from './components/PaletteSelector.vue';
import Hello from './components/Hello.vue';
import './index.css';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hello></hello>
        <h3>Hello {{name}}!</h3>
        Name: <input v-model="name" type="text">
        <div><greeter :name="name"></greeter></div>
        <div class="tools">
            <font-selector></font-selector>
            <paletteSelector></paletteSelector>
        </div>
    </div>`,
    data: {
        name: "World"
    },
    components: {
        'greeter': MyComponent,
        'fontSelector': FontSelector,
        'paletteSelector': PaletteSelector,
        'hello': Hello
    }
});