import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, Story } from '@storybook/react';

import { Link, LinkProps } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

const Template: Story<LinkProps> = (props) => (
  <Link {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  href: '/',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Click me!',
  href: '/',
  icon: <PlusSquareIcon />,
};

export default meta;
