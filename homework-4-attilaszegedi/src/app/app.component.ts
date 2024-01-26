import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResultsTableComponent } from './results-table/results-table.component';
import { ressults } from './results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ResultsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'F1 Tabella- Attila Szegedi';
  results= ressults;

  selectedRow: number | undefined;

}
