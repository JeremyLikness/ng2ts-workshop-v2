/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColorSliderComponent } from './color-slider.component';

describe('ColorSliderComponent', () => {
  let component: ColorSliderComponent;
  let fixture: ComponentFixture<ColorSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
