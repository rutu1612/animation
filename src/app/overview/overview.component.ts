import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Output() onserveradded = new EventEmitter<{servername:string,servercontent:string}>();
  @Output() onBlueprintadded = new EventEmitter<{servername:string,servercontent:string}>();
  server_name="";
  server_content="";
  constructor() { }

  ngOnInit(): void {
  }
  Addserver(){
    this.onserveradded.emit({
      servername: this.server_name,
      servercontent:this.server_content
    })
  }
  AddserverBlueprint(){
    this.onBlueprintadded.emit({
      servername: this.server_name,
      servercontent:this.server_content
    });
  }
}