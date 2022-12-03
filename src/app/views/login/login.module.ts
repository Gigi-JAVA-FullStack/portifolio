import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../../components/components.module';
import { MaterialModule } from '../../../shared/material/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule,
    MaterialModule // Importando o Module para que todos os Componentes // fragmentos da pagina
  ]
})
export class LoginModule { }
