import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent implements OnInit {
  @Input() teamPlayers: any [];

  constructor() { }

  ngOnInit() {
  }

}
