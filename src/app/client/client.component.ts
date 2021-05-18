import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [
  ]
})
export class ClientComponent implements OnInit {
  deathProv: Date;
  loading: boolean
  client: any
  id: any
  constructor(private route: ActivatedRoute, private clientService: ClientService) { }
  ngOnInit(): void {
    this.loading = true;
    this.id = this.route.snapshot.paramMap.get('id')
    this.clientService.getClients().subscribe((clients: any[]) => {
      this.client = clients.find((client: any) => client.$key == this.id)
      console.log(clients);
      
      console.log(this.client);
      
      this.deathProv = this.getDeathProv();
      this.loading = false;
    }
    )
  }


getDeathProv(){
  let years = 100 - this.client.age;
  return new Date(new Date().getFullYear() + years, new Date().getMonth(), new Date().getDate())
}


}
