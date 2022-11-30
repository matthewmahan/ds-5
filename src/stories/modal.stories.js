/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import modal from '../components/Modal.vue';

storiesOf('Molecule/Modal', module)
  .add('with text', () => ({
    components: { modal },
    template: '<modal @click="action">Button</modal>',
    methods: { action: action('clicked') }
  }));
