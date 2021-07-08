import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Data } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data$: Observable<Data[]> = of([]);
  destroyed$ = new Subject();

  projectsTitle = 'Our Latest Developments';
  filterText = '';
  data: Data[] = [];
  houses: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    this.data$
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.data = data;
        this.houses = data;
      });
  }

  filterTextOnChange(filterText: any): void {
    if (filterText.length > 3) {
      this.houses = this.data.filter(house => house.title.toLowerCase().includes(filterText.toLowerCase()));
    }
    else {
      this.houses = this.data;
    }
  }

}
