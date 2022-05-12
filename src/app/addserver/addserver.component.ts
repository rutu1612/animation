import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.css']
})
export class AddserverComponent implements OnInit {
  @Input() element: {type:string,name:string,content:string};
  constructor() { }

  ngOnInit(): void {
  }

}
