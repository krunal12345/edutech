import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'sign-in',
  imports: [CommonModule, ButtonModule, InputTextModule, FormsModule, ReactiveFormsModule, FloatLabelModule, PasswordModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {

  _router = inject(Router);

  value3 = '';
  password = '';
  confirmPassword = '';
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  naviagte(): void {
    this._router.navigate(['login']);
  }
}
