import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercatComponent } from './ajoutercat.component';

describe('AjoutercatComponent', () => {
  let component: AjoutercatComponent;
  let fixture: ComponentFixture<AjoutercatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutercatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
