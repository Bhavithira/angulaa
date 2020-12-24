import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsComponent } from './cats.component';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display image', () => {
    const imagEl = fixture.debugElement.nativeElement.querySelector('img');
    expect(imagEl.src).toContain('/assets/images/cats.jpg');
  });
});
