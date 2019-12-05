import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndifferentPage } from './indifferent.page';

describe('IndifferentPage', () => {
  let component: IndifferentPage;
  let fixture: ComponentFixture<IndifferentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndifferentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndifferentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
