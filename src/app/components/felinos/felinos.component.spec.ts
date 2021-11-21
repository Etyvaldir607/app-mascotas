import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelinosComponent } from './felinos.component';

describe('FelinosComponent', () => {
  let component: FelinosComponent;
  let fixture: ComponentFixture<FelinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FelinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
