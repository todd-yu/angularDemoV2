import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
