import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ElevationExample {
  className: string;
  text: string;
}

interface ClassCategory {
  name: string;
  classes: string[];
}

@Component({
  selector: 'app-elevation-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './elevation-demo.component.html',
  styleUrl: './elevation-demo.component.scss'
})
export class ElevationDemoComponent {
  manualClass = '';
  customText = '';
  examples: ElevationExample[] = [];
  defaultText = 'Elevation Example';
  selectedCategory = '';
  selectedClass = '';
  
  classCategories: ClassCategory[] = [
    {
      name: 'Shadows (Global)',
      classes: [
        'global-el-ultraLowRaised',
        'global-el-lowRaised',
        'global-el-midRaised',
        'global-el-highRaised',
        'global-el-ultraHighRaised'
      ]
    },
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
