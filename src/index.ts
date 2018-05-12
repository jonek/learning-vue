import Vue from "vue";
import MyComponent from './MyComponent';
import Hello from './components/Hello.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hello></hello>
        <h3>Hello {{name}}!</h3>
        Name: <input v-model="name" type="text">
        <div><greeter :name="name"></greeter></div>
    </div>`,
    data: {
        name: "World"
    },
    components: {
        'greeter': MyComponent,
        'hello': Hello
    }
});