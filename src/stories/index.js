import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import ButtonPrimary from '../components/Button/ButtonPrimary'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Primary', () => <ButtonPrimary onPress={action('Clicked')}>Primary Button</ButtonPrimary>);
