import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
  constructor() { }

  sharedText = '';
  sharedCount = '2';
  resultArray: Array<string> = [];
  siteUrl = environment.siteUrl;

  ngOnInit() {}

  copy(): void {
    window.getSelection().selectAllChildren(document.getElementById('result-text'));
    document.execCommand('Copy');
  }

  shareSubmit(): void {
    this.resultArray = [];
    const sharedCount = +this.sharedCount;
    const sharedText = encodeURIComponent(this.sharedText);
    const linkLength: number = this.sharedText.length;

    for (let i = 0; i < sharedCount; i++) {
      let itemResult = '';

      for (let j = 0; j < linkLength; j++) {
        itemResult += sharedText[i + j * sharedCount] || '';
      }

      const itemLink = this.siteUrl + '?c=' + (i + 1) + 'of' + sharedCount + '&l=' + itemResult;
      this.resultArray.push(itemLink);
    }
  }
}

// TODO: продумать, что делать с временем хранения, расшифровка только в срок хранения
// TODO: выводить на странице любую хорошую новость
