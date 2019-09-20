import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWComponent } from './hello-w.component';

describe('HelloWComponent', () => {
  let component: HelloWComponent;
  let fixture: ComponentFixture<HelloWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
