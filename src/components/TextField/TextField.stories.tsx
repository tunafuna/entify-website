import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['sharp', 'soft'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    shape: 'sharp',
    disabled: false,
    placeholder: 'Text here',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SharpDefault: Story = {
  name: 'Sharp / Default',
  args: { shape: 'sharp' },
};

export const SharpWithLabel: Story = {
  name: 'Sharp / With Label',
  args: { shape: 'sharp', label: 'Email', id: 'email-field' },
  play: async ({ canvas }) => {
    // proves label[for] is wired to the input id
    await expect(canvas.getByLabelText('Email')).toBeVisible();
  },
};

export const SharpDisabled: Story = {
  name: 'Sharp / Disabled',
  args: { shape: 'sharp', disabled: true },
};

export const SoftDefault: Story = {
  name: 'Soft / Default',
  args: { shape: 'soft' },
};

export const SoftDisabled: Story = {
  name: 'Soft / Disabled',
  args: { shape: 'soft', disabled: true },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '280px' }}>
      <TextField shape="sharp" label="Title" placeholder="Text here" />
      <TextField shape="sharp" placeholder="Text here" />
      <TextField shape="sharp" placeholder="Text here" disabled />
      <TextField shape="soft" placeholder="Text here" />
      <TextField shape="soft" placeholder="Text here" disabled />
    </div>
  ),
};
