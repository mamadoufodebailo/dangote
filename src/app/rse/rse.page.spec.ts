import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsePage } from './rse.page';

describe('RsePage', () => {
  let component: RsePage;
  let fixture: ComponentFixture<RsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
