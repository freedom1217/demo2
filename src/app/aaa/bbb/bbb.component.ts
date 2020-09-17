import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbb',
  templateUrl: './bbb.component.html',
  styleUrls: ['./bbb.component.scss']
})
export class BbbComponent implements OnInit {
  @Input() age = 18;
  constructor() { }

  ngOnInit(): void {
  }

}
