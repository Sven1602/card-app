import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

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
}
