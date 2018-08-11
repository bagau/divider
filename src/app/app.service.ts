import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  count: string;
  link: string;

  constructor() { }

  getGetParameters(): boolean {
    let c: Array<string>, l: Array<string>;

    c = location.href.split('?c=');

    if (c.length !== 2) {
      return false;
    }

    l = c[1].split('&l=');
    this.count = l[0];

    if (typeof l === 'undefined' || l.length !== 2) {
      return false;
    }

    this.link = l[1];
    return true;
  }
}
