import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeMode } from 'src/app/theme/models/theme.enum';
import { ThemeService } from 'src/app/theme/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  ThemeMode = ThemeMode;

  constructor(public themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  changeThemeMode(){
    this.themeService.changeThemeMode(this.themeService.getCurrentTheme().themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK, this.themeService.getCurrentTheme().themeMode)
  }

}
