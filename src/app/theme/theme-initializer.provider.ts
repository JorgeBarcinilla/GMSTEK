import { APP_INITIALIZER } from "@angular/core";
import { ThemeService } from "./services/theme.service";

export const ThemeInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: (themeService: ThemeService) => () => themeService.loadTheme(),
  deps: [ThemeService],
  multi: true
};