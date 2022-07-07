import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /* It's also possible use different types of selectors, as  
  selector: '[app-servers]' --> Attribute
  selector: '.app-servers'--> Class
  but usually you should use the element one.
  */ 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowButton: boolean = false;
  statuses: string = "off";
  bolAux: boolean = false;

  
  constructor() { 
    setTimeout(() => {
      this.allowButton = true;
    }, 3000);

  }

  onUpdateServer() {
    this.bolAux = !this.bolAux;
    if (this.bolAux) this.statuses = "Online!"

    else this.statuses = "Offline!"
  }

  ngOnInit(): void {
  }

}
