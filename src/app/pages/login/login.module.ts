import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [CommonModule, ComponentsModule, FormsModule, IonicModule, ReactiveFormsModule, LoginPageRoutingModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
