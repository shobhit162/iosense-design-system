import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SpacingExample {
  className: string;
  text: string;
}

interface ClassCategory {
  name: string;
  classes: string[];
}

@Component({
  selector: 'app-spacing-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './spacing-demo.component.html',
  styleUrl: './spacing-demo.component.scss'
})
export class SpacingDemoComponent {
  manualClass = '';
  customText = '';
  examples: SpacingExample[] = [];
  defaultText = 'Spacing Example';
  selectedCategory = '';
  selectedClass = '';
  
  classCategories: ClassCategory[] = [
    {
      name: 'Margin',
      classes: [
        'global-m-00', 'global-m-01', 'global-m-02', 'global-m-03', 'global-m-04',
        'global-m-05', 'global-m-06', 'global-m-07', 'global-m-08', 'global-m-09',
        'global-m-10', 'global-m-11'
      ]
    },
    {
      name: 'Margin (Top)',
      classes: [
        'global-mt-00', 'global-mt-01', 'global-mt-02', 'global-mt-03', 'global-mt-04',
        'global-mt-05', 'global-mt-06', 'global-mt-07', 'global-mt-08', 'global-mt-09',
        'global-mt-10', 'global-mt-11'
      ]
    },
    {
      name: 'Margin (Right)',
      classes: [
        'global-mr-00', 'global-mr-01', 'global-mr-02', 'global-mr-03', 'global-mr-04',
        'global-mr-05', 'global-mr-06', 'global-mr-07', 'global-mr-08', 'global-mr-09',
        'global-mr-10', 'global-mr-11'
      ]
    },
    {
      name: 'Margin (Bottom)',
      classes: [
        'global-mb-00', 'global-mb-01', 'global-mb-02', 'global-mb-03', 'global-mb-04',
        'global-mb-05', 'global-mb-06', 'global-mb-07', 'global-mb-08', 'global-mb-09',
        'global-mb-10', 'global-mb-11'
      ]
    },
    {
      name: 'Margin (Left)',
      classes: [
        'global-ml-00', 'global-ml-01', 'global-ml-02', 'global-ml-03', 'global-ml-04',
        'global-ml-05', 'global-ml-06', 'global-ml-07', 'global-ml-08', 'global-ml-09',
        'global-ml-10', 'global-ml-11'
      ]
    },
    {
      name: 'Margin (X-Axis)',
      classes: [
        'global-mx-00', 'global-mx-01', 'global-mx-02', 'global-mx-03', 'global-mx-04',
        'global-mx-05', 'global-mx-06', 'global-mx-07', 'global-mx-08', 'global-mx-09',
        'global-mx-10', 'global-mx-11'
      ]
    },
    {
      name: 'Margin (Y-Axis)',
      classes: [
        'global-my-00', 'global-my-01', 'global-my-02', 'global-my-03', 'global-my-04',
        'global-my-05', 'global-my-06', 'global-my-07', 'global-my-08', 'global-my-09',
        'global-my-10', 'global-my-11'
      ]
    },
    {
      name: 'Padding',
      classes: [
        'global-p-00', 'global-p-01', 'global-p-02', 'global-p-03', 'global-p-04',
        'global-p-05', 'global-p-06', 'global-p-07', 'global-p-08', 'global-p-09',
        'global-p-10', 'global-p-11'
      ]
    },
    {
      name: 'Padding (Top)',
      classes: [
        'global-pt-00', 'global-pt-01', 'global-pt-02', 'global-pt-03', 'global-pt-04',
        'global-pt-05', 'global-pt-06', 'global-pt-07', 'global-pt-08', 'global-pt-09',
        'global-pt-10', 'global-pt-11'
      ]
    },
    {
      name: 'Padding (Right)',
      classes: [
        'global-pr-00', 'global-pr-01', 'global-pr-02', 'global-pr-03', 'global-pr-04',
        'global-pr-05', 'global-pr-06', 'global-pr-07', 'global-pr-08', 'global-pr-09',
        'global-pr-10', 'global-pr-11'
      ]
    },
    {
      name: 'Padding (Bottom)',
      classes: [
        'global-pb-00', 'global-pb-01', 'global-pb-02', 'global-pb-03', 'global-pb-04',
        'global-pb-05', 'global-pb-06', 'global-pb-07', 'global-pb-08', 'global-pb-09',
        'global-pb-10', 'global-pb-11'
      ]
    },
    {
      name: 'Padding (Left)',
      classes: [
        'global-pl-00', 'global-pl-01', 'global-pl-02', 'global-pl-03', 'global-pl-04',
        'global-pl-05', 'global-pl-06', 'global-pl-07', 'global-pl-08', 'global-pl-09',
        'global-pl-10', 'global-pl-11'
      ]
    },
    {
      name: 'Padding (X-Axis)',
      classes: [
        'global-px-00', 'global-px-01', 'global-px-02', 'global-px-03', 'global-px-04',
        'global-px-05', 'global-px-06', 'global-px-07', 'global-px-08', 'global-px-09',
        'global-px-10', 'global-px-11'
      ]
    },
    {
      name: 'Padding (Y-Axis)',
      classes: [
        'global-py-00', 'global-py-01', 'global-py-02', 'global-py-03', 'global-py-04',
        'global-py-05', 'global-py-06', 'global-py-07', 'global-py-08', 'global-py-09',
        'global-py-10', 'global-py-11'
      ]
    },
    {
      name: 'Gap',
      classes: [
        'global-gap-00', 'global-gap-01', 'global-gap-02', 'global-gap-03',
        'global-gap-04', 'global-gap-05', 'global-gap-06', 'global-gap-07',
        'global-gap-08', 'global-gap-09', 'global-gap-10', 'global-gap-11'
      ]
    },
    {
      name: 'Gap (X-Axis)',
      classes: [
        'global-gap-x-00', 'global-gap-x-01', 'global-gap-x-02', 'global-gap-x-03',
        'global-gap-x-04', 'global-gap-x-05', 'global-gap-x-06', 'global-gap-x-07',
        'global-gap-x-08', 'global-gap-x-09', 'global-gap-x-10', 'global-gap-x-11'
      ]
    },
    {
      name: 'Gap (Y-Axis)',
      classes: [
        'global-gap-y-00', 'global-gap-y-01', 'global-gap-y-02', 'global-gap-y-03',
        'global-gap-y-04', 'global-gap-y-05', 'global-gap-y-06', 'global-gap-y-07',
        'global-gap-y-08', 'global-gap-y-09', 'global-gap-y-10', 'global-gap-y-11'
      ]
    },
    {
      name: 'Gutter',
      classes: [
        'global-gutter-00', 'global-gutter-01', 'global-gutter-02', 'global-gutter-03',
        'global-gutter-04', 'global-gutter-05', 'global-gutter-06', 'global-gutter-07',
        'global-gutter-08', 'global-gutter-09', 'global-gutter-10', 'global-gutter-11'
      ]
    },
    {
      name: 'Gutter (X-Axis)',
      classes: [
        'global-gutter-x-00', 'global-gutter-x-01', 'global-gutter-x-02', 'global-gutter-x-03',
        'global-gutter-x-04', 'global-gutter-x-05', 'global-gutter-x-06', 'global-gutter-x-07',
        'global-gutter-x-08', 'global-gutter-x-09', 'global-gutter-x-10', 'global-gutter-x-11'
      ]
    },
    {
      name: 'Gutter (Y-Axis)',
      classes: [
        'global-gutter-y-00', 'global-gutter-y-01', 'global-gutter-y-02', 'global-gutter-y-03',
        'global-gutter-y-04', 'global-gutter-y-05', 'global-gutter-y-06', 'global-gutter-y-07',
        'global-gutter-y-08', 'global-gutter-y-09', 'global-gutter-y-10', 'global-gutter-y-11'
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
