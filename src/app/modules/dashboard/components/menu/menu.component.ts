import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../../models/interfaces/menu';

@Component({
  selector: 'mms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuOptions: Menu[] = [
    {
      displayName: 'File',
      iconName: 'folder',
      children: [
        {
          displayName: 'item 1',
          iconName: 'folder',
          children: [
            {
              displayName: 'item 1',
              iconName: 'folder',
            },
            {
              displayName: 'item 2',
              iconName: 'folder',
            },

          ]
        },
        {
          displayName: 'item 2',
          iconName: 'folder',
        },

      ]
    },
    {
      displayName: 'View',
      iconName: 'close',
      children: [
      ]
    },
    {
      displayName: 'Options',
      iconName: 'folder',
      children: [
        {
          displayName: 'item 1',
          iconName: 'folder',
          children: [
            {
              displayName: 'item 1',
              iconName: 'folder',
            },
            {
              displayName: 'item 2',
              iconName: 'folder',
            },

          ]
        },
        {
          displayName: 'item 2',
          iconName: 'folder',
        },

      ]
    },
    {
      displayName: 'Options 2',
      iconName: 'folder',
      children: [
        {
          displayName: 'item 1',
          iconName: 'folder',
          children: [
            {
              displayName: 'item 1',
              iconName: 'folder',
            },
            {
              displayName: 'item 2',
              iconName: 'folder',
            },

          ]
        },
        {
          displayName: 'item 2',
          iconName: 'folder',
        },

      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
