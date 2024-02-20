import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//models

//components
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart} from 'chart.js';

//services
import { LocalService } from './core/services/local.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private localStorage:LocalService, 
    private translateService: TranslateService){}

  ngOnInit(): void {
    Chart.register(ChartDataLabels);
    this.titleService.setTitle("Energo Sphere");
    if(this.localStorage.getData('language') == null){
      this.localStorage.saveData('language', 'en');
    }
    this.translateService.use(this.localStorage.getData('language'));
  }
  
}
