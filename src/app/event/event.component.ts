import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEvent } from 'app/interfaces/event';
import { RepositoryService } from 'app/repository-service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  
  constructor(private repositoryService: RepositoryService) { }
  events: any;
  eventID: string = "";
  name: string="";
  description: string = "";
  price: number = 0.00;
  location: string = "";
  date: string = "2/27/2023"

  ngOnInit(): void {
    this.repositoryService.getEvents().subscribe(
      (response) => {
        this.events = response; 
      });
    
  };

  addEvent(form:NgForm) {
    let newEvent : IEvent = {
      eventID: -1,
      name: form.form.value.name,
      description : form.form.value.description,
      date: form.form.value.date,
      location: form.form.value.location,
      price: form.form.value.price

      
    }

    this.repositoryService.addEvent(newEvent).subscribe(
      () => {
        this.repositoryService.getEvents();
      });
    

  }
  
  // getEvents() {
  //   this.repositoryService.getEvents().subscribe(
  //     (response) => {
  //       this.events = response;
  //     });
  // }
}



