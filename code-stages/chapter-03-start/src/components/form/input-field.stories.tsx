import { Meta, Story } from '@storybook/react';

import {
  InputField,
  InputFieldProps,
} from './input-field';

const meta: Meta = {
  title: 'Components/Form/InputField',
  component: InputField,
};

const Template: Story<InputFieldProps> = (props) => (
  <InputField {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  error: { message: 'Invalid input', type: 'pattern' },
};

export default meta;
