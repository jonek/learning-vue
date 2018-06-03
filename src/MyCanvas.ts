import Vue from 'vue'
import Component from 'vue-class-component'
import {Font} from './components/fonts';
// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  template: '<div :style="style">{{message}}</div>',
  props: ['message', 'font', 'foreground', 'background']
})
export default class MyComponent extends Vue {
  /** Prop that serves as an input */
  message!: string;
  font!: Font;
  foreground!: string;
  background!: string;
  get style() {
    return {
      background: this.background,
      color: this.foreground,
      fontFamily: this.font.familyName,
      fontSize: '2em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '3em'
    }
  }
}