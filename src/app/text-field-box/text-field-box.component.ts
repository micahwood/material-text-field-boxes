import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field-box',
  templateUrl: './text-field-box.component.html',
  styleUrls: ['./text-field-box.component.scss']
})
export class TextFieldBoxComponent implements OnInit {

  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
