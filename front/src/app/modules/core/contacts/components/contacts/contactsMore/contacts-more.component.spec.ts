import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsMoreComponent } from './contacts-more.component';

describe('ContactsMoreComponent', () => {
  let component: ContactsMoreComponent;
  let fixture: ComponentFixture<ContactsMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
