import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';

import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    FormsModule
  ],
  declarations: [LoginFormComponent],
  exports:[LoginFormComponent]

})
export class SegurancaModule { }
