import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfsoundHomeComponent } from './wolfsound-home.component';

describe('WolfsoundHomeComponent', () => {
  let component: WolfsoundHomeComponent;
  let fixture: ComponentFixture<WolfsoundHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfsoundHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfsoundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
