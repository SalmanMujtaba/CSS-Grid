import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRowsComponent } from './template-rows.component';

describe('TemplateRowsComponent', () => {
  let component: TemplateRowsComponent;
  let fixture: ComponentFixture<TemplateRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
