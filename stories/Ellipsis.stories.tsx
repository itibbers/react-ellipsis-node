import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Ellipsis, EllipsisProps } from '../src'

const meta: Meta = {
  title: 'Ellipsis',
  component: Ellipsis,
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story<EllipsisProps> = args => <Ellipsis {...args} />

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut,enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const node = (
  <span>
    <span>Lorem </span>
    <b>ipsum </b>
    <i>dolor </i>
    <del>sit </del>
    {text}
  </span>
)

export const Default = Template.bind({})

Default.args = {
  style: { width: 300 },
  children: text,
  lines: 3
}

export const NodeDemo = Template.bind({})

NodeDemo.args = {
  style: { width: 300 },
  children: node,
  lines: 3
}
