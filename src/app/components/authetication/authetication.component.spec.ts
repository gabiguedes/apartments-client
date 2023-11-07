import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheticationComponent } from './authetication.component';

describe('AutheticationComponent', () => {
  let component: AutheticationComponent;
  let fixture: ComponentFixture<AutheticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutheticationComponent]
    });
    fixture = TestBed.createComponent(AutheticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
