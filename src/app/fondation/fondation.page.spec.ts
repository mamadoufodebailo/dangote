import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationPage } from './fondation.page';

describe('FondationPage', () => {
  let component: FondationPage;
  let fixture: ComponentFixture<FondationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
