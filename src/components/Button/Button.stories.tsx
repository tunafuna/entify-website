import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    usage: {
      control: 'select',
      options: ['brand', 'primary', 'negative'],
    },
    shape: {
      control: 'select',
      options: ['sharp', 'soft', 'round'],
    },
    size: {
      control: 'select',
      options: ['m', 'l'],
      description: 'Size L is only available for the Round shape',
    },
    disabled: { control: 'boolean' },
  },
  args: {
    usage: 'brand',
    shape: 'sharp',
    size: 'm',
    disabled: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Shape × Usage matrix ──────────────────────────────────────────────────── */

export const SharpBrand: Story = {
  name: 'Sharp / Brand',
  args: { usage: 'brand', shape: 'sharp' },
};

export const SharpPrimary: Story = {
  name: 'Sharp / Primary',
  args: { usage: 'primary', shape: 'sharp' },
};

export const SharpNegative: Story = {
  name: 'Sharp / Negative',
  args: { usage: 'negative', shape: 'sharp' },
};

export const SoftBrand: Story = {
  name: 'Soft / Brand',
  args: { usage: 'brand', shape: 'soft' },
};

export const SoftPrimary: Story = {
  name: 'Soft / Primary',
  args: { usage: 'primary', shape: 'soft' },
};

export const SoftNegative: Story = {
  name: 'Soft / Negative',
  args: { usage: 'negative', shape: 'soft' },
};

export const RoundM: Story = {
  name: 'Round / Size M',
  args: { usage: 'brand', shape: 'round', size: 'm', children: '→' },
};

export const RoundL: Story = {
  name: 'Round / Size L',
  args: { usage: 'brand', shape: 'round', size: 'l', children: '→' },
};

/* ── States ────────────────────────────────────────────────────────────────── */

export const DisabledBrand: Story = {
  name: 'Disabled / Brand',
  args: { usage: 'brand', shape: 'sharp', disabled: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeDisabled();
  },
};

// CssCheck — proves tokens.css actually loaded; brand bg resolves to #dcf755
export const CssCheck: Story = {
  name: 'CSS Check',
  args: { usage: 'brand', shape: 'sharp', children: 'CSS check' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /css check/i });
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(220, 247, 85)');
  },
};

export const DisabledPrimary: Story = {
  name: 'Disabled / Primary',
  args: { usage: 'primary', shape: 'sharp', disabled: true },
};

export const DisabledNegative: Story = {
  name: 'Disabled / Negative',
  args: { usage: 'negative', shape: 'sharp', disabled: true },
};

/* ── All variants at a glance ──────────────────────────────────────────────── */

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button usage="brand" shape="sharp">Brand Sharp</Button>
        <Button usage="brand" shape="soft">Brand Soft</Button>
        <Button usage="brand" shape="round" size="m">→</Button>
        <Button usage="brand" shape="round" size="l">→</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button usage="primary" shape="sharp">Primary Sharp</Button>
        <Button usage="primary" shape="soft">Primary Soft</Button>
        <Button usage="primary" shape="round" size="m">→</Button>
        <Button usage="primary" shape="round" size="l">→</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button usage="negative" shape="sharp">Negative Sharp</Button>
        <Button usage="negative" shape="soft">Negative Soft</Button>
        <Button usage="negative" shape="round" size="m">→</Button>
        <Button usage="negative" shape="round" size="l">→</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button usage="brand" shape="sharp" disabled>Brand Disabled</Button>
        <Button usage="primary" shape="sharp" disabled>Primary Disabled</Button>
        <Button usage="negative" shape="sharp" disabled>Negative Disabled</Button>
      </div>
    </div>
  ),
};
