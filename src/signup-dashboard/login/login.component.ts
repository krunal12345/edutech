import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'login',
  imports: [CommonModule, ButtonModule, InputTextModule, FormsModule, ReactiveFormsModule, FloatLabelModule, PasswordModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLoginComponent {

  _router = inject(Router);

  value3 = ''
  password = '';

  naviagte(): void {
    this._router.navigate(['signIn']);
  }
}
