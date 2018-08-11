import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {count} from "rxjs/internal/operators";

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  constructor(private appService: AppService) {}

  isTextShown = false;
  resultLink = '';
  currentCount: number;
  linksCount: number;

  ngOnInit() {
    this.work();
  }

  work() {
    this.parseCount();
    let localData: Array<string>;

    // JSON.parse can break application if it has errors so I use try-catch
    try {
      localData = JSON.parse(localStorage.divideLinks);
    } catch (e) {
      localData = [];
    }

    // add link to array for set it to localStorage
    localData[this.currentCount - 1] = this.appService.link;

    const storageSize = localData.length;

    if (storageSize < this.linksCount) {
      localStorage.divideLinks = JSON.stringify(localData);
      this.isTextShown = true;
    } else {
      this.restoreLink(localData);
      localStorage.clear();
    }
  }

  parseCount(): void {
    const countArray = this.appService.count.split('of');
    this.currentCount = +countArray[0];
    this.linksCount = +countArray[1];
  }

  restoreLink(linksArray: string[]): void {
    let counter = 0, finish = true;
    const resultArray: string[] = [];

    while (finish === true) {
      linksArray.forEach(function(value) {
        const item = value[counter];
        if (typeof item === 'undefined') {
          finish = false;
          return;
        }
        resultArray.push(value[counter]);
      });

      counter++;
    }

    const resultLink = resultArray.join('');

    this.resultLink = decodeURIComponent(resultLink);
  }
}
