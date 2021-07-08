import { Component, Input, OnInit } from '@angular/core';
import { DataType } from 'src/app/models/data.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() dataItem: any;
  @Input() pictureName = '';
  @Input() idx = 0;

  pictureAddress = '';
  dataType = DataType;

  constructor() { }

  ngOnInit(): void {
    this.pictureAddress = '../../../assets/pictures/' + this.pictureName + '.png';
  }

}
