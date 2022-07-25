import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HtmlPipesModule } from 'src/app/shared/html-pipes/html-pipes.module';
import { ActionCardComponent } from './action-card.component';



@NgModule({
  declarations: [
    ActionCardComponent
  ],
  imports: [
    CommonModule,
    HtmlPipesModule
  ],
  exports: [
    ActionCardComponent
  ]
})
export class ActionCardModule { }
