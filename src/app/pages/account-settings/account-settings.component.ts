import { Component, ElementRef, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  constructor(
    private setService: SettingService
  ) {
  }

  ngOnInit(): void {
    this.setService.currentTheme();
  }
  cambiartema(colorTema: string){
    this.setService.cambiartema(colorTema);
  }

}
