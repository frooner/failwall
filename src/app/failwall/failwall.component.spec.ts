import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FailwallComponent } from './failwall.component';

describe('FailwallComponent', () => {
  let component: FailwallComponent;
  let fixture: ComponentFixture<FailwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
