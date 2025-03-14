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
      name: 'Surface Colors',
      type: 'background',
      classes: [
        'surface-bright', 'surface', 'surface-dim',
        'surface-container-lowest', 'surface-container-low', 'surface-container',
        'surface-container-high', 'surface-container-highest'
      ]
    },
    {
      name: 'On Surface Colors',
      type: 'text',
      classes: [
        'on-surface-lowest', 'on-surface-low', 'on-surface'
      ]
    },
    {
      name: 'Outline Colors',
      type: 'text',
      classes: [
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
        'secondary', 'on-secondary', 'secondary-container', 'on-secondary-container'
      ]
    },
    {
      name: 'Error Colors',
      type: 'background',
      classes: [
        'error', 'on-error', 'error-container', 'on-error-container'
      ]
    },
    {
      name: 'Warning Colors',
      type: 'background',
      classes: [
        'warning', 'on-warning', 'warning-container', 'on-warning-container'
      ]
    },
    {
      name: 'Success Colors',
      type: 'background',
      classes: [
        'success', 'on-success', 'success-container', 'on-success-container'
      ]
    },
    {
      name: 'Extend 1 Colors',
      type: 'background',
      classes: [
        'extend-1', 'on-extend-1', 'extend-1-container', 'on-extend-1-container'
      ]
    },
    {
      name: 'Extend 2 Colors',
      type: 'background',
      classes: [
        'extend-2', 'on-extend-2', 'extend-2-container', 'on-extend-2-container'
      ]
    },
    {
      name: 'Extend 3 Colors',
      type: 'background',
      classes: [
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
