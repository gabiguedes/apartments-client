import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoobComponent } from './user-noob.component';

describe('UserNoobComponent', () => {
  let component: UserNoobComponent;
  let fixture: ComponentFixture<UserNoobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNoobComponent]
    });
    fixture = TestBed.createComponent(UserNoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
