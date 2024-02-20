import { Component, OnInit } from '@angular/core';

//services
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})

export class LanguageSelectorComponent implements OnInit{

  public selectedLanguage: any;

  public languagesList: any[] = [
    {
      imgUrl: '/assets/images/English.png',
      code: 'en',
      name: 'English',
    },
    {
      imgUrl: '/assets/images/French.png',
      code: 'fr',
      name: 'Français',
    }
  ];

  constructor(
    private translate: TranslateService, 
    private localStorage: LocalService){}
  
  public ngOnInit(): void {
    const actualLanguage = this.localStorage.getData('language') == "en" ? this.languagesList[0]: this.languagesList[1];
    this.selectedLanguage = actualLanguage;
    this.changeLanguageByCode(actualLanguage.code);    
  }

  public changeLanguage(language: any): void {
    this.localStorage.saveData('language', language.code);
    this.translate.use(language.code);
  }

  public changeLanguageByCode(languageCode: string): void {
    this.localStorage.saveData('language', languageCode);
    this.translate.use(languageCode);
  }
}
