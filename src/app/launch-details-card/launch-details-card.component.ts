import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-launch-details-card',
  templateUrl: './launch-details-card.component.html',
  styleUrls: ['./launch-details-card.component.css']
})
export class LaunchDetailsCardComponent implements OnInit, OnChanges {
  @Input() data: any;

  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // console.log(this.data);
  }

}
