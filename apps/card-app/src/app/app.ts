import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Card } from '@card-app/ui';

@Component({
  imports: [/*NxWelcome*/RouterModule, Card],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'card-app';

  headerText = "Card Header";
  footerText = "Footer Text";
}
