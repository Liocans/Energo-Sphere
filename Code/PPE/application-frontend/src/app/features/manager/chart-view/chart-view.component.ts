import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//models
import { ChartTable } from 'src/app/core/models/datamodels/ChartTable';
import { MeterHistory } from 'src/app/core/models/datamodels/MeterHistory';
import { Meter } from 'src/app/core/models/datamodels/Meter';

//components
import { MenuItem } from 'primeng/api';
import { UIChart } from 'primeng/chart';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';

//services
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import exportFromJSON from 'export-from-json'
import { MeterService } from 'src/app/core/services/meter.service';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})

export class ChartViewComponent implements OnInit, AfterViewInit{
  @ViewChild('myChart') chart: UIChart;

  public items: MenuItem[];

  public chartTable: ChartTable[];

  public checked: boolean = true;

  public isLoad: boolean = false; 

  public basicData : any;

  public basicOptions: any;

  private _currentId : any;

  private _meters: Array<Meter>;

  private _histories: Map<Meter, MeterHistory[]> = new Map<Meter, MeterHistory[]>();

  public cols: DynamicColumn[];

  public formHeader: string;

  private _hasMonth: boolean;
  
  private month: Record<string, string>= {
    "january": '01',
    "february": '02',
    "march": '03',
    "april": '04',
    "may": '05',
    "june": '06',
    "july": '07',
    "august": '08',
    "september": '09',
    "october": '10',
    "november": '11',
    "december": '12'
  };

  private colors: Record<number, string> = {
    1: "#e9c752",
    2: "#1E2EDE",
    3: "#890F0F"
  };

  private names: Record<number, string> = {
    1: "electricity",
    2: "water" ,
    3: "gas"
  };

  private translateName : Record<string, string> = {
    "Electricity": "electricity",
    "Water": "water",
    "Gas": "gas",
    "Electricité": "electricity",
    "Eau": "water",
    "Gaz": "gas"
  };

  private translateMonth: Record<string, string> = {
    "January": "january",
    "February": "february",
    "March": "march",
    "April": "april",
    "May": "may",
    "June": "june",
    "July": "july",
    "August": "august",
    "September": "september",
    "October": "october",
    "November": "november",
    "December": "december",
    "Janvier": "january",
    "Février": "february",
    "Mars": "march",
    "Avril": "april",
    "Mai": "may",
    "Juin": "june",
    "Juillet": "july",
    "Août": "august",
    "Septembre": "september",
    "Octobre": "october",
    "Novembre": "november",
    "Décembre": "december"
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly meterService: MeterService,
    public translateService: TranslateService ){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if(this.chart)
        this.chart.reinit();
    });
  }
  
  ngOnInit(): void {

    this.basicOptions = {
      plugins: {
        datalabels:{
          align:"end",
          anchor:"end",
          borderRadius: 4,
          backgroundColor: "#6B6FD5",
          color:"white"
        },
        legend:  
        { 
          display : true, 
          labels: {color: '#495057'}
        }
      }
    };

    this.chartTable = [];

    this.items = [
      {
          label: 'JSON',
          command: () => this.exportJSON(this.chartTable)
      },
      {
        label: 'XML',
        command: () => this.exportXML(this.chartTable)
      }
  ];


    this.cols = [
      {field: 'date', header: 'date'},
      {field: 'energyType', header: 'energytype'},
      {field: 'value', header: 'value'}    
    ];

    this.showSeven().then(() => {
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
          this.refreshLabels();
      });
    });
  }

  public refreshLabels(): void{
    this.basicData.datasets.forEach(element => {
      this.translateService.get(this.translateName[element.label]).subscribe(translation => {
        element.label = translation
      });
    });

    if(this._hasMonth){
      this.refreshLabelsMonth();
    }

    if(this.checked){
      this.chart.reinit();
    }
  }

  public refreshLabelsMonth(): void{
    for (let index = 0; index < this.basicData.labels.length; index++) {
      var parts = this.basicData.labels[index].split(" - ");
      this.translateService.get(this.translateMonth[parts[0]] ? this.translateMonth[parts[0]] : parts[0]).subscribe(translation => {
        this.basicData.labels[index] = translation + " - " + parts[1];
    });
    };
  }

  public async refreshData(startDate : string, endDate : string): Promise<void>{
    this._currentId = this.activatedRoute.snapshot.params['id'];
    if(this._currentId.includes('H')){
      await this.meterService.getMetersByBuildingId(this._currentId).toPromise()
      .then(response => {
        this._meters = response;
      });
      await this.historiesCreator(this._meters, startDate, endDate)
    }else{
      await this.meterService.getMetersByWalletId(this._currentId).toPromise()
      .then(response => {
        this._meters = response;
      });
      await this.historiesCreator(this._meters, startDate, endDate)
    }
  }

  public padTo2Digits(num: number) : string {
    return num.toString().padStart(2, '0');
  }

  public formatDate(date: Date) : string {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-')
    );
  }

  public async historiesCreator(meters : Meter[], startDate : string, endDate : string): Promise<void>{
    this._histories.clear();
    this.chartTable = [];
    for (let index = 0; index < meters.length; index++) {
      await this.meterService.getMeterHistoryByMeterIdUsingDate(meters[index].id, startDate, endDate).toPromise()
      .then(response =>{
        this._histories.set(meters[index], response);
      })
    }
  }

  public async getLastSevenDay(): Promise<void>{
    var startDate = new Date();
    var endDate = new Date();
    var dataIndex = 0;
    startDate.setDate(startDate.getDate() - 7);

    await this.refreshData(this.formatDate(startDate), this.formatDate(endDate));

    for (let index = 0; index < 7; index++) {
      startDate.setDate(startDate.getDate() + 1)
      this.basicData.labels.push(this.formatDate(startDate))
    }
    
    this._histories.forEach((value: MeterHistory[], key: Meter) => {

      this.translateService.get(this.names[key.energyType.id]).subscribe(translation => {
        this.initialiazeDatasetElement(translation, this.colors[key.energyType.id])
      });

      var array = [];
      var valueData = 0;
      this.basicData.labels.forEach(element=>{
        value.forEach(history => {
          if(history.date == element){
            if(valueData <= history.value){
              valueData = history.value;
            }
          }
        });
        this.addDataTableChart(element, key.energyType.id, valueData, key.id);
        array.push(valueData);
     });

     this.basicData.datasets[dataIndex].data = array;
     dataIndex++;
    });
  }

  public async getByMonth(): Promise<void>{
    var endDate = new Date();
    var startDate = new Date();
    var dataIndex = 0;

    startDate.setFullYear(startDate.getFullYear() - 1);
    
    await this.refreshData(this.formatDate(startDate), this.formatDate(endDate));
    
    var currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        var month = currentDate.toLocaleString('en', { month: 'long' }).toLocaleLowerCase();
        var year = currentDate.getFullYear();
        var label = month + ' - ' + year;
        this.basicData.labels.push(label);
    
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    this._histories.forEach((value: MeterHistory[], key: Meter) => {
      this.translateService.get(this.names[key.energyType.id]).subscribe(translation => {
        this.initialiazeDatasetElement(translation, this.colors[key.energyType.id])
      })

     var array = [];
     var valueData = 0;
     this.basicData.labels.forEach(element=>{
      value.forEach(history => {
        if((history.date.split("-")[1] == this.month[element.split(" - ")[0]]) && (history.date.split("-")[0] == element.split(" - ")[1])){
          if(valueData <= history.value){
            valueData = history.value;
          }
        }
      });
        this.addDataTableChart(element, key.energyType.id, valueData, key.id);
        array.push(valueData);
     });

     this.basicData.datasets[dataIndex].data = array;
     dataIndex++;
    });
    this.refreshLabelsMonth();
  }

  public async getByYear(): Promise<void>{
    var startDate = new Date();
    var endDate = new Date();
    var dataIndex = 0;
    
    startDate.setFullYear(startDate.getFullYear() - 5);

    await this.refreshData(this.formatDate(startDate), this.formatDate(endDate));

    for (let index = 2019; index <= endDate.getFullYear(); index++) {
      this.basicData.labels.push(index)
    }
    
    this._histories.forEach((value: MeterHistory[], key: Meter) => {
      this.translateService.get(this.names[key.energyType.id]).subscribe(translation => {
        this.initialiazeDatasetElement(translation, this.colors[key.energyType.id])
      })


     var array = [];
     var valueData = 0;
     this.basicData.labels.forEach(element=>{
      value.forEach(history => {

        if(history.date.split("-")[0] == element){
          if(valueData <= history.value){
            valueData = history.value;
          }
        }
      });
        if(valueData > 0)
          this.addDataTableChart(element, key.energyType.id, valueData, key.id);
        array.push(valueData);
     });

     this.basicData.datasets[dataIndex].data = array;
     dataIndex++;
    });
  }

  public async showSeven(): Promise<void>{
    this._hasMonth = false;
    this.isLoad = false;
    this.basicData = {
      labels: [],
      datasets: []
    };
    await this.getLastSevenDay();
    this.isLoad = true;
  }

  public async showMonth(): Promise<void>{
    this._hasMonth = true;
    this.isLoad = false;
    this.basicData = {
      labels: [],
      datasets: []
    };
    await this.getByMonth();
    this.isLoad = true;
  }

  public async showYear(): Promise<void>{
    this._hasMonth = false;
    this.isLoad = false;
    this.basicData = {
      labels: [],
      datasets: []
    };
    await this.getByYear();
    this.isLoad = true;
  }

  public addDataTableChart(date:string, energyType:number, value:number, meterId: string): void{
    this.chartTable.push(
      {
        date: date,
        energyType: this.names[energyType], 
        value: value,
        meterId: meterId
      });
  }

  public exportJSON(chartTable: ChartTable[]): void{
    const data = chartTable;
    const fileName = "data";
    const exportType =  exportFromJSON.types.json;
    exportFromJSON({data, fileName, exportType})
  }

  public exportXML(chartTable: ChartTable[]): void{
    const data = chartTable;
    const fileName = 'data';
    const exportType =  exportFromJSON.types.xml;
    exportFromJSON({data, fileName, exportType});
  }

  public initialiazeDatasetElement(translation:string, color:string): void{
    this.basicData.datasets.push({
      label: translation,
      borderColor: color,
      backgroundColor: color,
      tension: 0.4,
      data : []
   });
  }
}
