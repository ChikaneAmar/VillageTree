import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/family.model';

@Component({
  selector: 'ft-tree',
  template: `
    <div class="tree">
      <ul>
        <li>
          <div class="top">
            <span  *ngFor="let node of family.nodes" class="{{node.gender}}"
                   [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
                   class="node">{{node.name}}</span>
          </div>
          <ul>
            <li *ngFor="let child of family.children" [ngStyle]="{'width': _setWidth(child) ? '100%' : 'auto'}" >
              <ft-leaf [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./ng-family-tree.component.scss'],
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NgFamilyTreeComponent implements OnInit {

  @Input() family: Family;
  
  constructor() { }

  ngOnInit() {
  }

  _setWidth(child: Family) {
    return child.nodes && child.nodes[0].relationship === 'self' && child.children.length < 2;
  }
}
