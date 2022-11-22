/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import regular-modal from '../components/modal.vue';

storiesOf('Molecule/Modal', module)
  .add('with text', () => ({
    components: { regular-modal },
    template: '<regular-modal @click="action">Button</regular-modal>',
    methods: { action: action('clicked') }
  }));
