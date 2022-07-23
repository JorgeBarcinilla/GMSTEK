import { Injectable } from '@angular/core';
import { PALETTE } from '../models/palette';
import { ThemeMode } from '../models/theme.enum';
import { IPalette, IVariantPalette, OptionPalette, Theme, VariantPaletteProperties } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme = new Theme(PALETTE);

  constructor() {
  }

  getCurrentTheme(){
    return this.currentTheme
  }

  public loadTheme(): void {
    this.setPaletteColorsCSS(this.currentTheme.palette);
    document.body.classList.add(this.currentTheme.themeMode);
  }

  changeThemeMode(themeMode: ThemeMode, oldThemeMode: ThemeMode){
    this.currentTheme.setThemeMode(themeMode);
    document.body.classList.add(themeMode);
    localStorage.setItem('themeMode', themeMode);
    if(oldThemeMode) document.body.classList.remove(oldThemeMode);
  }

  private setPaletteColorsCSS(palette: IPalette): void {
    for (const key in palette) {
      if (Object.prototype.hasOwnProperty.call(palette, key)) {
        const parseKey = key as OptionPalette;
        this.setCSSVariables(key, palette[parseKey]);
      }
    }
  }

  private setCSSVariables(key: string, palette: IVariantPalette) {
    for (const keyPalette in palette) {
      if (Object.prototype.hasOwnProperty.call(palette, keyPalette)) {
        if (keyPalette == 'contrast') {
          for (const keyContrast in palette.contrast) {
            if (Object.prototype.hasOwnProperty.call(palette.contrast, keyContrast)) {
              const parseKey = keyContrast as VariantPaletteProperties;
              document.documentElement.style.setProperty(
                '--theme-' + [key] + '-contrast-' + keyContrast.replace('_', ''),
                palette.contrast[parseKey]
              );
            }
          }
        } else {
          const parseKey = keyPalette as VariantPaletteProperties;
          document.documentElement.style.setProperty(
            '--theme-' + [key] + '-' + keyPalette.replace('_', ''),
            palette[parseKey]
          );
        }
      }
    }
  }
}
