import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [NgTemplateOutlet],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() headerText = "";
  @Input() showHeader = true;
  @Input() showFooter = true;
  @Input() footerText = "";
  @Input() template?: TemplateRef<any>;

  // weiteres Feature um Daten zwischen der Card Komponente und der Parent Komponente zu teilen
  // Bsp.: Benachrichtigung der Parent Komponente nach dem Löschen einer Card Komp.
  // oder Übergabe einer Info bzw. Details an die Parent Komponente
  @Output() showMessage = new EventEmitter<string>();

  callEventShowMessage() {

    this.showMessage.emit("Message to Parent");
  }
}
