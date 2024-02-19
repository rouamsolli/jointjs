import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDiagrammeComponent } from './mon-diagramme.component';

describe('MonDiagrammeComponent', () => {
  let component: MonDiagrammeComponent;
  let fixture: ComponentFixture<MonDiagrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonDiagrammeComponent]
    });
    fixture = TestBed.createComponent(MonDiagrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
