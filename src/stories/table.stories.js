/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import table from '../components/table.vue';

storiesOf('Molecule/table', table)
.add('with text', () => ({
    components: { table },
    template: '<table>',
    methods: { action: action('clicked') }
  }));
