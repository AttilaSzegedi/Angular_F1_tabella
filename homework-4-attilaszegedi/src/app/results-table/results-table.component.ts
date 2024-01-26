import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input () selectedRow: number | undefined;
  //* to get the input from app for row selection
  @Output () selectedRowChange: EventEmitter<number>= new EventEmitter();
  //* out put to made data out from component and manage the event

  constructor() { }

  ngOnInit(): void {
  }
  selected(index:number){
    this.selectedRowChange.emit(index);
  }
  //* made a function to set the selectedRowChange and give to index
}
