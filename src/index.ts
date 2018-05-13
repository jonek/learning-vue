import Vue from "vue";
import MyComponent from './MyComponent';
import FontSelector from './components/FontSelector.vue';
import Hello from './components/Hello.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hello></hello>
        <h3>Hello {{name}}!</h3>
        Name: <input v-model="name" type="text">
        <div><greeter :name="name"></greeter></div>
        <div><font-selector></font-selector></div>
    </div>`,
    data: {
        name: "World"
    },
    components: {
        'greeter': MyComponent,
        'fontSelector': FontSelector,
        'hello': Hello
    }
});