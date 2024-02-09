import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFamilyTreeComponent } from './ng-family-tree.component';

describe('NgFamilyTreeComponent', () => {
  let component: NgFamilyTreeComponent;
  let fixture: ComponentFixture<NgFamilyTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFamilyTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFamilyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
