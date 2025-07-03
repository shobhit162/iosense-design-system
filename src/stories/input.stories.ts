import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { MaterialInputComponent } from '../app/components/material-input/material-input.component';
import { FormControl, Validators } from '@angular/forms';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MaterialInputComponent> = {
  title: 'Components/Input',
  component: MaterialInputComponent,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { valueChange: fn() },
  argTypes: {
    formControl: { table: { disable: true } }, // hide from controls & docs table to avoid serialization error
  },
};

export default meta;
type Story = StoryObj<MaterialInputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
      label: 'Full Name',
      placeholder: 'Enter your name',
      hint: 'This will appear on your profile',
      type: 'text',
      formControl: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      // prefixIcon: 'person',
    },
  };

  export const EmailInput: Story = {
    args: {
      label: 'Email Address',
      placeholder: 'example@mail.com',
      type: 'email',
      formControl: new FormControl('', [Validators.required, Validators.email]),
      // prefixIcon: 'email',
    },
  };