import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  selectedItem: any;
  @Input() list: any;
  @Input() isReverse!: boolean
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'list': {
            this.isReverse ? this.list.reverse() : this.list;
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.selectedItem = '';
  }
}
