import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SadPage } from './sad.page';

describe('SadPage', () => {
  let component: SadPage;
  let fixture: ComponentFixture<SadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
