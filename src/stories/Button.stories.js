import { withDesign } from 'storybook-addon-designs';
import Button from '../components/Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atom/Button',
  component: Button,
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
  components: { Button },
  template: '<button @onClick="onClick" v-bind="$props"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  primary: true,
  label: 'Button',}
  Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1210%3A1503',
    },
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',}
  Primary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1208%3A1495',
    },
};

export const Outline = Template.bind({});
Outline.args = {
  size: 'large',
  label: 'Button',}
  Outline.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1210%3A1503',
    },
};

export const Subtle = Template.bind({});
Subtle.args = {
  size: 'small',
  label: 'Button',}
  Subtle.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1210%3A1503',
    },
};

export const Transparent = Template.bind({});
Transparent.args = {
  size: 'small',
  label: 'Button',}
  Transparent.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLpDfamOhPYt8g3zf6GORm/AdvoCor-Design-System?node-id=1210%3A1503',
    },
};
