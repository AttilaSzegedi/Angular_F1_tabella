import { Component, Input, input } from '@angular/core';
import { Result } from '../results';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.scss'
})
export class ResultsTableComponent {
  @Input () results: Result[]=[];
  //* add the result.ts export Result[] as input for this component
  

}
