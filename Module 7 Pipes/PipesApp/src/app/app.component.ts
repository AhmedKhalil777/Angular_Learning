import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Servers =[
    {
      "instanceType":"Small",
      "name": "Testing Server",
      "status": "offline",
      "started": new Date(1,1,2020)
    },
    {
      "instanceType":"Large",
      "name": "Production Server",
      "status": "stable",
      "started": new Date(1,3,2020)
    },
    {
      "instanceType":"Large",
      "name": "User Database",
      "status": "critical",
      "started": new Date(14,3,2020)
    },
    {
      "instanceType":"Large",
      "name": "Development Server",
      "status": "stable",
      "started": new Date(6,3,2020)
    },
  ]
  getStatusClasses(server :{instanceType : string ,name:string , status:string , started:Date }){
           return{
            'list-group-item-danger': server.status === "critical",
            'list-group-item-success': server.status === "stable",
            'list-group-item-warning': server.status === "offline",
           };
  }
  title = 'PipesApp';
}
