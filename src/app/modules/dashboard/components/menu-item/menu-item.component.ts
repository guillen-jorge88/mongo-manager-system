import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../../../models/interfaces/menu';

@Component({
  selector: 'mms-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: Menu[];
  @ViewChild('childMenu') public childMenu;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
