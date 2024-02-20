import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    for (let index = 0; index < localStorage.length; index++) {
      const element = localStorage.key(index);
      if(element == 'roles'){
        localStorage.setItem(element, JSON.stringify([]));
      }else{
        if(element != 'language'){
          localStorage.setItem(element,'');
        }
      }
    }
  }
}