import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  args: {
    color: 'color',
    logoStyle: 'logo+text',
    theme: 'light',
  },
  argTypes: {
    color:     { control: 'select', options: ['color', 'grayscale', 'knockout'] },
    logoStyle: { control: 'select', options: ['logo+text', 'logo', 'favicon'] },
    theme:     { control: 'select', options: ['light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

const dark = { globals: { theme: 'dark' } };

/* ── Logo+text ──────────────────────────────────────────────────────────── */
export const FullColorLight: Story = {
  name: 'Logo+text / Color / Light',
  args: { color: 'color', logoStyle: 'logo+text', theme: 'light' },
};

export const FullColorDark: Story = {
  name: 'Logo+text / Color / Dark',
  args: { color: 'color', logoStyle: 'logo+text', theme: 'dark' },
  ...dark,
};

export const FullGrayscaleLight: Story = {
  name: 'Logo+text / Grayscale / Light',
  args: { color: 'grayscale', logoStyle: 'logo+text', theme: 'light' },
};

export const FullGrayscaleDark: Story = {
  name: 'Logo+text / Grayscale / Dark',
  args: { color: 'grayscale', logoStyle: 'logo+text', theme: 'dark' },
  ...dark,
};

export const FullKnockoutLight: Story = {
  name: 'Logo+text / Knockout / Light',
  args: { color: 'knockout', logoStyle: 'logo+text', theme: 'light' },
};

export const FullKnockoutDark: Story = {
  name: 'Logo+text / Knockout / Dark',
  args: { color: 'knockout', logoStyle: 'logo+text', theme: 'dark' },
  ...dark,
};

/* ── Logo mark only ─────────────────────────────────────────────────────── */
export const MarkColorLight: Story = {
  name: 'Logo / Color / Light',
  args: { color: 'color', logoStyle: 'logo', theme: 'light' },
};

export const MarkColorDark: Story = {
  name: 'Logo / Color / Dark',
  args: { color: 'color', logoStyle: 'logo', theme: 'dark' },
  ...dark,
};

export const MarkGrayscaleLight: Story = {
  name: 'Logo / Grayscale / Light',
  args: { color: 'grayscale', logoStyle: 'logo', theme: 'light' },
};

export const MarkGrayscaleDark: Story = {
  name: 'Logo / Grayscale / Dark',
  args: { color: 'grayscale', logoStyle: 'logo', theme: 'dark' },
  ...dark,
};

export const MarkKnockoutLight: Story = {
  name: 'Logo / Knockout / Light',
  args: { color: 'knockout', logoStyle: 'logo', theme: 'light' },
};

export const MarkKnockoutDark: Story = {
  name: 'Logo / Knockout / Dark',
  args: { color: 'knockout', logoStyle: 'logo', theme: 'dark' },
  ...dark,
};

/* ── Favicon ────────────────────────────────────────────────────────────── */
export const FaviconColorLight: Story = {
  name: 'Favicon / Color / Light',
  args: { color: 'color', logoStyle: 'favicon', theme: 'light' },
};

export const FaviconColorDark: Story = {
  name: 'Favicon / Color / Dark',
  args: { color: 'color', logoStyle: 'favicon', theme: 'dark' },
  ...dark,
};

export const FaviconGrayscaleLight: Story = {
  name: 'Favicon / Grayscale / Light',
  args: { color: 'grayscale', logoStyle: 'favicon', theme: 'light' },
};

export const FaviconGrayscaleDark: Story = {
  name: 'Favicon / Grayscale / Dark',
  args: { color: 'grayscale', logoStyle: 'favicon', theme: 'dark' },
  ...dark,
};

export const FaviconKnockoutLight: Story = {
  name: 'Favicon / Knockout / Light',
  args: { color: 'knockout', logoStyle: 'favicon', theme: 'light' },
};

export const FaviconKnockoutDark: Story = {
  name: 'Favicon / Knockout / Dark',
  args: { color: 'knockout', logoStyle: 'favicon', theme: 'dark' },
  ...dark,
};
