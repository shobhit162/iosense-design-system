import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TypographyExample {
  className: string;
  text: string;
}

interface ClassCategory {
  name: string;
  classes: string[];
}

@Component({
  selector: 'app-typography-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './typography-demo.component.html',
  styleUrl: './typography-demo.component.scss'
})
export class TypographyDemoComponent {
  manualClass = '';
  customText = '';
  examples: TypographyExample[] = [];
  defaultText = 'Typography Example';
  selectedCategory = '';
  selectedClass = '';
  
  classCategories: ClassCategory[] = [
    {
      name: 'Font Size (Global)',
      classes: [
        'global-fz-10', 'global-fz-12', 'global-fz-14', 'global-fz-16', 'global-fz-18',
        'global-fz-20', 'global-fz-24', 'global-fz-32', 'global-fz-34', 'global-fz-36',
        'global-fz-38', 'global-fz-40', 'global-fz-48', 'global-fz-56', 'global-fz-64',
        'global-fz-72'
      ]
    },
    {
      name: 'Font Size (Scale)',
      classes: [
        'font-size-25', 'font-size-50', 'font-size-100', 'font-size-200', 'font-size-300',
        'font-size-400', 'font-size-500', 'font-size-600', 'font-size-700', 'font-size-800',
        'font-size-900', 'font-size-1000', 'font-size-1100'
      ]
    },
    {
      name: 'Line Height (Global)',
      classes: [
        'global-lh-00', 'global-lh-14', 'global-lh-16', 'global-lh-18', 'global-lh-20',
        'global-lh-22', 'global-lh-24', 'global-lh-26', 'global-lh-32', 'global-lh-38',
        'global-lh-42', 'global-lh-46', 'global-lh-48', 'global-lh-56', 'global-lh-64',
        'global-lh-70', 'global-lh-78'
      ]
    },
    {
      name: 'Line Height (Scale)',
      classes: [
        'line-height-00', 'line-height-25', 'line-height-50', 'line-height-75',
        'line-height-100', 'line-height-200', 'line-height-300', 'line-height-400',
        'line-height-500', 'line-height-600', 'line-height-700', 'line-height-800',
        'line-height-900', 'line-height-1000', 'line-height-1100'
      ]
    },
    {
      name: 'Letter Spacing (Global)',
      classes: [
        'global-ls-compressed', 'global-ls-condensed', 'global-ls-normal',
        'global-ls-expanded', 'global-ls-extended'
      ]
    },
    {
      name: 'Letter Spacing (Scale)',
      classes: [
        'letter-spacing-50', 'letter-spacing-100'
      ]
    },
    {
      name: 'Font Weight (Global)',
      classes: [
        'global-fw-100', 'global-fw-200', 'global-fw-300', 'global-fw-400',
        'global-fw-500', 'global-fw-600', 'global-fw-700', 'global-fw-800',
        'global-fw-900'
      ]
    },
    {
      name: 'Font Weight (Scale)',
      classes: [
        'font-weight-400',
        'font-weight-500',
        'font-weight-600',
        'font-weight-700'
      ]
    },
    {
      name: 'Paragraph Spacing (Global)',
      classes: [
        'global-ps-00', 'global-ps-08', 'global-ps-10', 'global-ps-11', 'global-ps-12'
      ]
    },
    {
      name: 'Paragraph Spacing (Scale)',
      classes: [
        'paragraph-spacing-00', 'paragraph-spacing-100', 'paragraph-spacing-200',
        'paragraph-spacing-300', 'paragraph-spacing-400'
      ]
    },
    {
      name: 'List Spacing (Global)',
      classes: [
        'global-lis-00', 'global-lis-04', 'global-lis-08', 'global-lis-12',
        'global-lis-16', 'global-lis-20', 'global-lis-24'
      ]
    },
    {
      name: 'List Spacing (Scale)',
      classes: [
        'list-spacing-00', 'list-spacing-100'
      ]
    },
    {
      name: 'Type Scale (Display)',
      classes: [
        'DisplayXLargeRegular', 'DisplayXLargeMedium', 'DisplayXLargeSemibold',
        'DisplayLargeRegular', 'DisplayLargeMedium', 'DisplayLargeSemibold',
        'DisplayMediumRegular', 'DisplayMediumMedium', 'DisplayMediumSemibold',
        'DisplaySmallRegular', 'DisplaySmallMedium', 'DisplaySmallSemibold'
      ]
    },
    {
      name: 'Type Scale (Heading)',
      classes: [
        'Heading2XLargeRegular', 'Heading2XLargeSemibold',
        'HeadingXLargeRegular', 'HeadingXLargeSemibold',
        'HeadingLargeRegular', 'HeadingLargeSemibold',
        'HeadingMediumRegular', 'HeadingMediumSemibold',
        'HeadingSmallRegular', 'HeadingSmallSemibold'
      ]
    },
    {
      name: 'Type Scale (Body)',
      classes: [
        'BodyLargeRegular', 'BodyLargeMedium', 'BodyLargeSemibold',
        'BodyMediumRegular', 'BodyMediumMedium', 'BodyMediumSemibold',
        'BodySmallRegular', 'BodySmallMedium', 'BodySmallSemibold',
        'BodyXSmallRegular', 'BodyXSmallMedium', 'BodyXSmallSemibold'
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
