import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App5HttpclientComponent } from './app5-httpclient.component';

describe('App5HttpclientComponent', () => {
  let component: App5HttpclientComponent;
  let fixture: ComponentFixture<App5HttpclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App5HttpclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App5HttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
