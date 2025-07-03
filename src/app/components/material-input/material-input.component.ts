import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-material-input',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './material-input.component.html',
  styleUrl: './material-input.component.scss'
})
export class MaterialInputComponent {
  @Input() label: string = 'Hello';
  @Input() placeholder: string = '';
  @Input() error: string = '';
  @Input() hint: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() maxlength: number = 100;
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() formControl: FormControl = new FormControl();

  @Output() valueChange = new EventEmitter<any>();

  get showError(): boolean {
    return this.formControl && this.formControl.invalid && this.formControl.touched;
  }

  onInput(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
