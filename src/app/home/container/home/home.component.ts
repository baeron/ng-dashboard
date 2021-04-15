import { Component, OnInit } from '@angular/core'
import { ILink } from './../../models/ILink'
import LinkJSON from '../../models/links.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  linksList: Array<ILink> | undefined
  constructor() {}

  ngOnInit(): void {
    this.linksList = LinkJSON
  }
}
