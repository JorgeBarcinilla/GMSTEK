import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe que se encarga de obtener el tamaño de un elemento del DOM
 */
@Pipe({
  name: 'elementSize',
  pure: false
})
export class ElementSizePipe implements PipeTransform {
  /**
   * Metodo que se encarga de obtener el tamaño de un elemento del DOM
   *
   * @param {HTMLElement} element - Elemento del DOM
   * @returns {{ width: number; height: number }} - Objeto con el tamaño del elemento
   */
  transform(element: HTMLElement): { width: number; height: number } {
    const boundingRect = element.getBoundingClientRect();
    return {
      width: boundingRect.width,
      height: boundingRect.height
    };
  }
}
