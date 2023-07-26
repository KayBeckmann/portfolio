import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialmedialinksComponent } from './sozialmedialinks.component';

describe('SozialmedialinksComponent', () => {
  let component: SozialmedialinksComponent;
  let fixture: ComponentFixture<SozialmedialinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SozialmedialinksComponent]
    });
    fixture = TestBed.createComponent(SozialmedialinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
