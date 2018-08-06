import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  sharedText = '';
  sharedCount = '2';
  resultArray: Array<string> = [];

  shareSubmit(): void {
    this.resultArray = [];
    const sharedCount = +this.sharedCount;
    const linkLength: number = this.sharedText.length;

    for (let i = 0; i < sharedCount; i++) {
      let itemResult = '';

      for (let j = 0; j < linkLength; j++) {
        if (j === 0) {
          itemResult += this.sharedText[i] || '';
          continue;
        }

        itemResult += this.sharedText[i + j * sharedCount] || '';
      }

      this.resultArray.push(itemResult);
    }
  }

  /*copy() {
    const textarea = document.getElementById('textarea');
    textarea.select();
    document.execCommand('copy');
  }*/
}
