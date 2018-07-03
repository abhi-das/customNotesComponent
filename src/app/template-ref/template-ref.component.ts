import { Component, OnInit, Input, TemplateRef, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateRefComponent implements OnInit {

  @Input() tempRefName: TemplateRef<any>;

  tempRefName2: boolean;

  constructor() { }

  ngOnInit() {

    this.tempRefName2 = true;
    // console.log(this.tempRefName)
  }

}
