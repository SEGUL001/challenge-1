import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DpDatePickerModule } from 'ng2-date-picker';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { ClientStruct } from '../model/client'
import { ClientService } from '../services/client.service';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-creation',
  templateUrl: './client-creation.component.html',
  styles: [
  ]
})

export class ClientCreationComponent implements OnInit {

  loading: boolean;

  model: NgbDateStruct;
  client: any = {
    age: { valid: true, value: 0 },
    name: { valid: true, value: "" },
    surname: { valid: true, value: "" },
    birthDate: { valid: true, value: new Date() }
  };
  ngOnInit(): void {
    this.loading = false;
  }

  constructor(private calendar: NgbCalendar, private clientService: ClientService, private router: Router) {
    this.model = this.calendar.getToday();
    clientService.getClients().subscribe((result: any) => console.log(result))

  }

  createClient() {
    console.log(this.client);

    if (this.validateForm()) {
      this.loading = true;
      let newClient: ClientStruct = {
        name: this.client.name.value,
        surname: this.client.surname.value,
        age: this.client.age.value,
        birthDate: new Date(this.model.year, this.model.month, this.model.day).toDateString()
      }
      console.log(newClient);

      this.clientService.addClient(newClient)
      this.loading = false;
      this.router.navigate(["/created"])
      console.log("valid");

    } else {
      console.log("invalid");
    }

  }

  validateForm() {

    let validForm = true;

    if (this.calendar.getToday().equals(this.model) || this.calendar.getToday().before(this.model)) {
      validForm = false
      this.client.birthDate.valid = false;
    } else {
      this.client.birthDate.valid = true;
    }

    if (this.client.name.value.length == 0) {
      this.client.name.valid = false
      validForm = false;
    } else {
      this.client.name.valid = true
    }
    if (this.client.surname.value.length == 0) {
      this.client.surname.valid = false
      validForm = false;
    } else {
      this.client.surname.valid = true
    }
    if (this.client.age.value == 0) {
      this.client.age.valid = false
      validForm = false;
    } else {
      this.client.age.valid = true
    }
    return validForm;
  }

}
