import { Component, Input, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mini-donats',
  templateUrl: './mini-donats.component.html',
  styleUrls: ['./mini-donats.component.scss'],
})
export class MiniDonatsComponent implements OnInit {
  @Input() donats!: Array<any>;
  width = '320px';
  height = '200px';
  size = '150px';
  constructor() { }

  ngOnInit(): void {}
}
