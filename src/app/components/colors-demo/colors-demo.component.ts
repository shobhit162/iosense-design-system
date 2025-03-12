import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ColorExample {
  className: string;
  text: string;
  type: 'text' | 'background';
}

interface ColorCategory {
  name: string;
  classes: string[];
  type: 'text' | 'background';
}

@Component({
  selector: 'app-colors-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './colors-demo.component.html',
  styleUrl: './colors-demo.component.scss'
})
export class ColorsDemoComponent {
  manualClass = '';
  customText = '';
  examples: ColorExample[] = [];
  defaultText = 'Sample Text';

  selectedCategory = '';
  selectedClass = '';

  classCategories: ColorCategory[] = [
    {
      name: 'Red Colors',
      type: 'text',
      classes: [
        'global-red-50', 'global-red-100', 'global-red-200', 'global-red-300',
        'global-red-400', 'global-red-500', 'global-red-600', 'global-red-700',
        'global-red-800', 'global-red-900', 'global-red-1000',
        'global-red-a50', 'global-red-a100', 'global-red-a150', 'global-red-a200'
      ]
    },
    {
      name: 'Red Backgrounds',
      type: 'background',
      classes: [
        'global-red-bg-50', 'global-red-bg-100', 'global-red-bg-200', 'global-red-bg-300',
        'global-red-bg-400', 'global-red-bg-500', 'global-red-bg-600', 'global-red-bg-700',
        'global-red-bg-800', 'global-red-bg-900', 'global-red-bg-1000'
      ]
    },
    {
      name: 'Yellow Colors',
      type: 'text',
      classes: [
        'global-yellow-50', 'global-yellow-100', 'global-yellow-200', 'global-yellow-300',
        'global-yellow-400', 'global-yellow-500', 'global-yellow-600', 'global-yellow-700',
        'global-yellow-800', 'global-yellow-900', 'global-yellow-1000',
        'global-yellow-a50', 'global-yellow-a100', 'global-yellow-a150', 'global-yellow-a200'
      ]
    },
    {
      name: 'Yellow Backgrounds',
      type: 'background',
      classes: [
        'global-yellow-bg-50', 'global-yellow-bg-100', 'global-yellow-bg-200', 'global-yellow-bg-300',
        'global-yellow-bg-400', 'global-yellow-bg-500', 'global-yellow-bg-600', 'global-yellow-bg-700',
        'global-yellow-bg-800', 'global-yellow-bg-900', 'global-yellow-bg-1000'
      ]
    },
    {
      name: 'Aqua Green Colors',
      type: 'text',
      classes: [
        'global-aqua-green-50', 'global-aqua-green-100', 'global-aqua-green-200', 'global-aqua-green-300',
        'global-aqua-green-400', 'global-aqua-green-500', 'global-aqua-green-600', 'global-aqua-green-700',
        'global-aqua-green-800', 'global-aqua-green-900', 'global-aqua-green-1000',
        'global-aqua-green-a50', 'global-aqua-green-a100', 'global-aqua-green-a150', 'global-aqua-green-a200'
      ]
    },
    {
      name: 'Aqua Green Backgrounds',
      type: 'background',
      classes: [
        'global-aqua-green-bg-50', 'global-aqua-green-bg-100', 'global-aqua-green-bg-200',
        'global-aqua-green-bg-300', 'global-aqua-green-bg-400', 'global-aqua-green-bg-500',
        'global-aqua-green-bg-600', 'global-aqua-green-bg-700', 'global-aqua-green-bg-800',
        'global-aqua-green-bg-900', 'global-aqua-green-bg-1000'
      ]
    },
    {
      name: 'Green Colors',
      type: 'text',
      classes: [
        'global-green-50', 'global-green-100', 'global-green-200', 'global-green-300',
        'global-green-400', 'global-green-500', 'global-green-600', 'global-green-700',
        'global-green-800', 'global-green-900', 'global-green-1000',
        'global-green-a50', 'global-green-a100', 'global-green-a150', 'global-green-a200'
      ]
    },
    {
      name: 'Green Backgrounds',
      type: 'background',
      classes: [
        'global-green-bg-50', 'global-green-bg-100', 'global-green-bg-200', 'global-green-bg-300',
        'global-green-bg-400', 'global-green-bg-500', 'global-green-bg-600', 'global-green-bg-700',
        'global-green-bg-800', 'global-green-bg-900', 'global-green-bg-1000'
      ]
    },
    {
      name: 'Sky Blue Colors',
      type: 'text',
      classes: [
        'global-sky-blue-50', 'global-sky-blue-100', 'global-sky-blue-200', 'global-sky-blue-300',
        'global-sky-blue-400', 'global-sky-blue-500', 'global-sky-blue-600', 'global-sky-blue-700',
        'global-sky-blue-800', 'global-sky-blue-900', 'global-sky-blue-1000',
        'global-sky-blue-a50', 'global-sky-blue-a100', 'global-sky-blue-a150', 'global-sky-blue-a200'
      ]
    },
    {
      name: 'Sky Blue Backgrounds',
      type: 'background',
      classes: [
        'global-sky-blue-bg-50', 'global-sky-blue-bg-100', 'global-sky-blue-bg-200',
        'global-sky-blue-bg-300', 'global-sky-blue-bg-400', 'global-sky-blue-bg-500',
        'global-sky-blue-bg-600', 'global-sky-blue-bg-700', 'global-sky-blue-bg-800',
        'global-sky-blue-bg-900', 'global-sky-blue-bg-1000'
      ]
    },
    {
      name: 'Blue Colors',
      type: 'text',
      classes: [
        'global-blue-50', 'global-blue-100', 'global-blue-200', 'global-blue-300',
        'global-blue-400', 'global-blue-500', 'global-blue-600', 'global-blue-700',
        'global-blue-800', 'global-blue-900', 'global-blue-1000',
        'global-blue-a50', 'global-blue-a100', 'global-blue-a150', 'global-blue-a200'
      ]
    },
    {
      name: 'Blue Backgrounds',
      type: 'background',
      classes: [
        'global-blue-bg-50', 'global-blue-bg-100', 'global-blue-bg-200', 'global-blue-bg-300',
        'global-blue-bg-400', 'global-blue-bg-500', 'global-blue-bg-600', 'global-blue-bg-700',
        'global-blue-bg-800', 'global-blue-bg-900', 'global-blue-bg-1000'
      ]
    },
    {
      name: 'Pink Colors',
      type: 'text',
      classes: [
        'global-pink-50', 'global-pink-100', 'global-pink-200', 'global-pink-300',
        'global-pink-400', 'global-pink-500', 'global-pink-600', 'global-pink-700',
        'global-pink-800', 'global-pink-900', 'global-pink-1000',
        'global-pink-a50', 'global-pink-a100', 'global-pink-a150', 'global-pink-a200'
      ]
    },
    {
      name: 'Pink Backgrounds',
      type: 'background',
      classes: [
        'global-pink-bg-50', 'global-pink-bg-100', 'global-pink-bg-200', 'global-pink-bg-300',
        'global-pink-bg-400', 'global-pink-bg-500', 'global-pink-bg-600', 'global-pink-bg-700',
        'global-pink-bg-800', 'global-pink-bg-900', 'global-pink-bg-1000'
      ]
    },
    {
      name: 'Purple Colors',
      type: 'text',
      classes: [
        'global-purple-50', 'global-purple-100', 'global-purple-200', 'global-purple-300',
        'global-purple-400', 'global-purple-500', 'global-purple-600', 'global-purple-700',
        'global-purple-800', 'global-purple-900', 'global-purple-1000',
        'global-purple-a50', 'global-purple-a100', 'global-purple-a150', 'global-purple-a200'
      ]
    },
    {
      name: 'Purple Backgrounds',
      type: 'background',
      classes: [
        'global-purple-bg-50', 'global-purple-bg-100', 'global-purple-bg-200', 'global-purple-bg-300',
        'global-purple-bg-400', 'global-purple-bg-500', 'global-purple-bg-600', 'global-purple-bg-700',
        'global-purple-bg-800', 'global-purple-bg-900', 'global-purple-bg-1000'
      ]
    },
    {
      name: 'Charcoal Blue Colors',
      type: 'text',
      classes: [
        'global-charcoal-blue-50', 'global-charcoal-blue-100', 'global-charcoal-blue-200',
        'global-charcoal-blue-300', 'global-charcoal-blue-400', 'global-charcoal-blue-500',
        'global-charcoal-blue-600', 'global-charcoal-blue-700', 'global-charcoal-blue-800',
        'global-charcoal-blue-900', 'global-charcoal-blue-1000',
        'global-charcoal-blue-a50', 'global-charcoal-blue-a100', 'global-charcoal-blue-a150',
        'global-charcoal-blue-a200'
      ]
    },
    {
      name: 'Charcoal Blue Backgrounds',
      type: 'background',
      classes: [
        'global-charcoal-blue-bg-50', 'global-charcoal-blue-bg-100', 'global-charcoal-blue-bg-200',
        'global-charcoal-blue-bg-300', 'global-charcoal-blue-bg-400', 'global-charcoal-blue-bg-500',
        'global-charcoal-blue-bg-600', 'global-charcoal-blue-bg-700', 'global-charcoal-blue-bg-800',
        'global-charcoal-blue-bg-900', 'global-charcoal-blue-bg-1000'
      ]
    },
    {
      name: 'Neutral Colors',
      type: 'text',
      classes: [
        'global-neutral-10', 'global-neutral-20', 'global-neutral-30', 'global-neutral-40',
        'global-neutral-50', 'global-neutral-100', 'global-neutral-200', 'global-neutral-300',
        'global-neutral-400', 'global-neutral-500', 'global-neutral-600', 'global-neutral-700',
        'global-neutral-800', 'global-neutral-900', 'global-neutral-1000'
      ]
    },
    {
      name: 'Neutral Backgrounds',
      type: 'background',
      classes: [
        'global-neutral-bg-10', 'global-neutral-bg-20', 'global-neutral-bg-30', 'global-neutral-bg-40',
        'global-neutral-bg-50', 'global-neutral-bg-100', 'global-neutral-bg-200', 'global-neutral-bg-300',
        'global-neutral-bg-400', 'global-neutral-bg-500', 'global-neutral-bg-600', 'global-neutral-bg-700',
        'global-neutral-bg-800', 'global-neutral-bg-900', 'global-neutral-bg-1000'
      ]
    },
    {
      name: 'Surface Colors',
      type: 'background',
      classes: [
        'surface-bright', 'surface', 'surface-dim',
        'surface-container-lowest', 'surface-container-low', 'surface-container',
        'surface-container-high', 'surface-container-highest'
      ]
    },
    {
      name: 'On Surface & Outline Colors',
      type: 'text',
      classes: [
        'on-surface-variant', 'on-surface',
        'outline-bright', 'outline', 'outline-dim'
      ]
    },
    {
      name: 'Primary Colors',
      type: 'background',
      classes: [
        'primary', 'on-primary', 'primary-container', 'on-primary-container'
      ]
    },
    {
      name: 'Secondary Colors',
      type: 'background',
      classes: [
        'secondary', 'on-secondary', 'secondary-container', 'on-container'
      ]
    },
    {
      name: 'Status Colors',
      type: 'background',
      classes: [
        'error', 'on-error', 'error-container', 'on-error-container',
        'warning', 'on-warning', 'warning-container', 'on-warning-container',
        'success', 'on-success', 'success-container', 'on-success-container'
      ]
    },
    {
      name: 'Extended Colors',
      type: 'background',
      classes: [
        'extend-1', 'on-extend-1', 'extend-1-container', 'on-extend-1-container',
        'extend-2', 'on-extend-2', 'extend-2-container', 'on-extend-2-container',
        'extend-3', 'on-extend-3', 'extend-3-container', 'on-extend-3-container'
      ]
    }
  ];

  getSelectedCategoryClasses(): string[] {
    const category = this.classCategories.find(cat => cat.name === this.selectedCategory);
    return category ? category.classes : [];
  }

  onCategoryChange() {
    this.selectedClass = '';
  }

  onClassSelect() {
    if (this.selectedClass) {
      const category = this.classCategories.find(cat => cat.classes.includes(this.selectedClass));
      this.examples.unshift({
        className: this.selectedClass,
        text: this.customText || this.defaultText,
        type: category?.type || 'text'
      });
      this.selectedClass = '';
      this.customText = '';
    }
  }

  addClass() {
    if (this.manualClass) {
      const category = this.classCategories.find(cat => cat.classes.includes(this.manualClass));
      this.examples.unshift({
        className: this.manualClass,
        text: this.customText || this.defaultText,
        type: category?.type || 'text'
      });
      this.manualClass = '';
      this.customText = '';
    }
  }

  removeExample(index: number) {
    this.examples.splice(index, 1);
  }
}
