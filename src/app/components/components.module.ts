import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ //Exportando para que os outros modules tbm possam utilizar TODOS os componentes da pagina
    HeaderComponent
  ]
})

export class ComponentsModule { }
