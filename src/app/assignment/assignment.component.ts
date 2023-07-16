import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

    status = false;
    log = [];


    constructor() {

    }

    changeStatus() {
      this.status = !this.status;
      this.log.push(this.log.length + 1);
    }

  }
