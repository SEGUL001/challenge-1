import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';
import { ClientStruct } from '../model/client';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: [
  ]
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService) { } 
  loading : boolean;
  clients : any[]
  promedio: number;
  std: number;
  ngOnInit(): void {
    this.loading = true;
    this.clientService.getClients().subscribe((clients) => {
      console.log(clients)
      this.clients = clients
      this.promedio = this.getPromedio(); 
      this.std = this.getStd();
      this.loading = false;
    })
  }
getPromedio(){
  let sum = 0;
  this.clients.forEach((client) => {
    sum += client.age
  })
  return sum/this.clients.length
}

getStd(){
  return math.std(this.clients.map((client) => client.age))
}
}
