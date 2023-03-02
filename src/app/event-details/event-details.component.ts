import { Component, Input , OnInit} from '@angular/core';
import { RepositoryService } from 'app/repository-service';
import { IEvent } from 'app/interfaces/event';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  @Input() index: string = "";
  eventDetails: IEvent | undefined;

  constructor(private route: ActivatedRoute, private  repo:RepositoryService) { }


  ngOnInit(): void {
    
    this.repo.getEventDetails(this.index).subscribe(
      (response) => {this.eventDetails = response;});
  }




}
