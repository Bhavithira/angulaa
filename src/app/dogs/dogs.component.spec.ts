import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsComponent } from './dogs.component';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display image', () => {
    const imagEl = fixture.debugElement.nativeElement.querySelector('img');
    expect(imagEl.src).toContain('/assets/images/dogs.jpg');
  });
});
