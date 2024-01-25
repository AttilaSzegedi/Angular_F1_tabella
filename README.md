# Angular_F1_tabella
 
 ## first create project
 create a projct with.

 ```ng create homework-4-attilaszegedi ```

 after all delete the ```app-component.ts``` and ```app-component.html``` file.

## Create the componenst.

to create a component use the ng creation. 
for that need to go to src app folder

```ng generate component results-table```

``` ng generate component podium```

![foto from components](/Angular_F1_tabella/files/components%20created.png)

- go to ```results-table.ts``` to get the Result[] as input

```
import { Results } from '../results';

imports: [CommonModule],

@Input () results: Result[]=[];
```
after all need to add the ```app-componens.ts``` import the result-table componens
```
imports: [CommonModule, RouterOutlet, ResultsTableComponent],
```
and the ```app-componens-html``` need to add the the componenst
```
<app-results-table></app-results-table>
```
next need to load the ```result.ts``` for our Array it made in app.components.ts with ``` results= ressults;``` do not forget to import ```import { ressults } from './results';```

and now add the component the value of array in ```app.component.html``` with
```
<app-results-table [results]="results">
 
        
 
</app-results-table>
```
now int the ```app-componenes.html``` need to add the tabel view plain html part:
to have all result in the table need to  use the ```*ngFor``` [https://angular.io/api/common/NgForOf] for date pipe (https://angular.io/api/common/DatePipe)
```
<table>
    <tr>
      <th>Futam</th>
      <th>Dátum</th>
      <th>Győztes</th>
      <th>Csapat</th>
      <th>Körök száma</th>
    </tr>
    <tr *ngFor="let result of results; let i = index;">
      <td>{{result.grandPrix}}</td>
      <td>{{result.date | date:'shortdate'}}</td>
      <td>{{result.winner}}</td>
      <td>{{result.team | uppercase}}</td>
      <td>{{result.laps}}</td>
    </tr>
</table>
<!--add teh tabel view-->
```
to made the header a upper case use css feature ```result-rable.component.scss```
```
th{
    text-transform: uppercase;
    /* change the text to uppercase*/
}
```

