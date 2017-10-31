import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfsoundListComponent } from './wolfsound-list.component';

describe('WolfsoundListComponent', () => {
  let component: WolfsoundListComponent;
  let fixture: ComponentFixture<WolfsoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfsoundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfsoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
