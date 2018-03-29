import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapcardComponent } from './bootstrapcard.component';

describe('BootstrapcardComponent', () => {
  let component: BootstrapcardComponent;
  let fixture: ComponentFixture<BootstrapcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
