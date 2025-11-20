import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [NgTemplateOutlet],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() headerText: string = "";
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = true;
  @Input() footerText: string = "";
  @Input() template?: TemplateRef<any>;

  // weiteres Feature um Daten zwischen der Card Komponente und der Parent Komponente zu teilen
  @Output() showMessage = new EventEmitter<string>();

  callEventShowMessage() {

    this.showMessage.emit("Message to Parent");
  }
}
