import { withDesign } from 'storybook-addon-designs';
import MyButton from './Button.vue';


// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  decorators: [withDesign],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',}
  Primary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1208%3A1496',
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',}
  Secondary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1208%3A1495',
    },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',}
  Large.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1208%3A1496',
    },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',}
  Small.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1208%3A1496',
    },
};
