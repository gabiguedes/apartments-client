import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupremeComponent } from './admin-supreme.component';

describe('AdminSupremeComponent', () => {
  let component: AdminSupremeComponent;
  let fixture: ComponentFixture<AdminSupremeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSupremeComponent]
    });
    fixture = TestBed.createComponent(AdminSupremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
