import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[];

  OnAddserver(eventdata:{servername:string,servercontent:string}){
    this.servers.push({
      type: 'server',
      name: eventdata.servername,
      content: eventdata.servercontent
    })
  }
  OnAddserverBlueprint(eventdata:{servername:string,servercontent:string}){
    this.servers.push({
      type: 'blueprint',
      name:  eventdata.servername,
      content: eventdata.servercontent
    })
  }
}
