import { NgModule } from '@angular/core';
import { ElementSizePipe } from './element-size.pipe';

/**
 * Modulo que contiene los pipes para elementos del DOM de la aplicación.
 */
@NgModule({
  declarations: [ElementSizePipe],
  imports: [],
  providers: [ElementSizePipe],
  exports: [ElementSizePipe]
})
export class HtmlPipesModule {}
