import { Component, OnInit } from '@angular/core';
import { LoadingDetailsFacade } from '../loading-details.facade';

@Component({
  selector: 'app-status-display',
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.css']
})
export class StatusDisplayComponent implements OnInit {

  constructor(public readonly facade: LoadingDetailsFacade) { }

  ngOnInit(): void {
  }

}
