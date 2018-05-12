import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  template: '<button @click="onClick">Greet</button>',
  props: ['name']
})
export default class MyComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Go';

  /** Prop that serves as an input */
  name!: number;

  // Component methods can be declared as instance methods
  onClick(): void {
    window.alert(`${this.message} ${this.name}!`)
  }
}