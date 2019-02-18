import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurPage } from './distributeur.page';

describe('DistributeurPage', () => {
  let component: DistributeurPage;
  let fixture: ComponentFixture<DistributeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
