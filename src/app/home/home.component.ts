import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public row1 = [
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
  ];
  public row2 = [
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png', kneel: true},
    {image: '/assets/img/cards/character.png'},
  ];
  public row3 = [
    {image: '/assets/img/cards/character.png', kneel: true},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
  ];

  public row4 = [
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
  ];
  public row5 = [
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png', kneel: true},
    {image: '/assets/img/cards/character.png'},
  ];
  public row6 = [
    {image: '/assets/img/cards/character.png', kneel: true},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
    {image: '/assets/img/cards/character.png'},
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.onResize();
  }

  @HostListener('window:resize') public onResize() {
    console.log(document.body.clientHeight);
  }

  public getLeft(row, i) {
    const totalHeight = document.body.clientHeight;
    const cardHeight = totalHeight / 6 - 10;
    const cardWidth = (cardHeight * 300) / 418;

    const cardsBefore = row.filter((card, index) => index < i);
    const cardsKneeledBefore = cardsBefore.filter((c) => c.kneel);
    const cardsNotKneeledBefore = cardsBefore.filter((c) => !c.kneel);

    let left = cardWidth * cardsNotKneeledBefore.length + cardHeight * cardsKneeledBefore.length;
    if (row[i].kneel) {
      left += ((cardHeight - cardWidth) / 2);
    }
    left += i * 2;

    return 'calc(100% - ' + (left + cardWidth) + 'px)';
  }

  public switchKneel(row, i) {
    row[i].kneel = !row[i].kneel;
  }
}
