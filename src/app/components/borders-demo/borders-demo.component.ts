import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BorderExample {
  className: string;
  text: string;
}

interface ClassCategory {
  name: string;
  classes: string[];
}

@Component({
  selector: 'app-borders-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './borders-demo.component.html',
  styleUrl: './borders-demo.component.scss'
})
export class BordersDemoComponent {
  manualClass = '';
  customText = '';
  examples: BorderExample[] = [];
  defaultText = 'Border Example';
  selectedCategory = '';
  selectedClass = '';
  
  classCategories: ClassCategory[] = [
    {
      name: 'Border Width (Global)',
      classes: [
        'global-bw-none',
        'global-bw-thinner',
        'global-bw-thin',
        'global-bw-thick',
        'global-bw-thicker'
      ]
    },
    {
      name: 'Border Width (Top)',
      classes: [
        'global-bw-t-none',
        'global-bw-t-thinner',
        'global-bw-t-thin',
        'global-bw-t-thick',
        'global-bw-t-thicker'
      ]
    },
    {
      name: 'Border Width (Right)',
      classes: [
        'global-bw-r-none',
        'global-bw-r-thinner',
        'global-bw-r-thin',
        'global-bw-r-thick',
        'global-bw-r-thicker'
      ]
    },
    {
      name: 'Border Width (Bottom)',
      classes: [
        'global-bw-b-none',
        'global-bw-b-thinner',
        'global-bw-b-thin',
        'global-bw-b-thick',
        'global-bw-b-thicker'
      ]
    },
    {
      name: 'Border Width (Left)',
      classes: [
        'global-bw-l-none',
        'global-bw-l-thinner',
        'global-bw-l-thin',
        'global-bw-l-thick',
        'global-bw-l-thicker'
      ]
    },
    {
      name: 'Border Style',
      classes: [
        'global-bs-solid',
        'global-bs-dashed',
        'global-bs-dotted',
        'global-bs-double',
        'global-bs-none'
      ]
    },
    {
      name: 'Border Radius (Global)',
      classes: [
        'global-br-none',
        'global-br-xsmall',
        'global-br-small',
        'global-br-medium',
        'global-br-large',
        'global-br-xlarge',
        'global-br-2xlarge',
        'global-br-max'
      ]
    },
    {
      name: 'Border Radius (Top Left)',
      classes: [
        'global-br-tl-none',
        'global-br-tl-xsmall',
        'global-br-tl-small',
        'global-br-tl-medium',
        'global-br-tl-large',
        'global-br-tl-xlarge',
        'global-br-tl-2xlarge',
        'global-br-tl-max'
      ]
    },
    {
      name: 'Border Radius (Top Right)',
      classes: [
        'global-br-tr-none',
        'global-br-tr-xsmall',
        'global-br-tr-small',
        'global-br-tr-medium',
        'global-br-tr-large',
        'global-br-tr-xlarge',
        'global-br-tr-2xlarge',
        'global-br-tr-max'
      ]
    },
    {
      name: 'Border Radius (Bottom Left)',
      classes: [
        'global-br-bl-none',
        'global-br-bl-xsmall',
        'global-br-bl-small',
        'global-br-bl-medium',
        'global-br-bl-large',
        'global-br-bl-xlarge',
        'global-br-bl-2xlarge',
        'global-br-bl-max'
      ]
    },
    {
      name: 'Border Radius (Bottom Right)',
      classes: [
        'global-br-br-none',
        'global-br-br-xsmall',
        'global-br-br-small',
        'global-br-br-medium',
        'global-br-br-large',
        'global-br-br-xlarge',
        'global-br-br-2xlarge',
        'global-br-br-max'
      ]
    },
    {
      name: 'Border Radius (Top)',
      classes: [
        'global-br-t-none',
        'global-br-t-xsmall',
        'global-br-t-small',
        'global-br-t-medium',
        'global-br-t-large',
        'global-br-t-xlarge',
        'global-br-t-2xlarge',
        'global-br-t-max'
      ]
    },
    {
      name: 'Border Radius (Bottom)',
      classes: [
        'global-br-b-none',
        'global-br-b-xsmall',
        'global-br-b-small',
        'global-br-b-medium',
        'global-br-b-large',
        'global-br-b-xlarge',
        'global-br-b-2xlarge',
        'global-br-b-max'
      ]
    },
    {
      name: 'Border Radius (Left)',
      classes: [
        'global-br-l-none',
        'global-br-l-xsmall',
        'global-br-l-small',
        'global-br-l-medium',
        'global-br-l-large',
        'global-br-l-xlarge',
        'global-br-l-2xlarge',
        'global-br-l-max'
      ]
    },
    {
      name: 'Border Radius (Right)',
      classes: [
        'global-br-r-none',
        'global-br-r-xsmall',
        'global-br-r-small',
        'global-br-r-medium',
        'global-br-r-large',
        'global-br-r-xlarge',
        'global-br-r-2xlarge',
        'global-br-r-max'
      ]
    }
  ];

  getSelectedCategoryClasses(): string[] {
    const category = this.classCategories.find(c => c.name === this.selectedCategory);
    return category ? category.classes : [];
  }

  onCategoryChange() {
    this.selectedClass = '';
  }

  onClassSelect() {
    if (this.selectedClass) {
      this.examples.unshift({
        className: this.selectedClass,
        text: this.customText || this.defaultText
      });
      this.selectedClass = '';
      this.customText = '';
    }
  }

  addClass() {
    if (this.manualClass) {
      this.examples.unshift({
        className: this.manualClass,
        text: this.customText || this.defaultText
      });
      this.manualClass = '';
      this.customText = '';
    }
  }

  removeExample(index: number) {
    this.examples.splice(index, 1);
  }
}
