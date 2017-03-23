import { Component, Input, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html'
})
export class RowComponent {
  @Input() public cards;
  @HostBinding('class.card-row') public cardRowClass: boolean = true;
  @HostListener('window:resize') public onResize() { return; }

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
