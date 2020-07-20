import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.css']
})
export class GoogleButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
