import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngryPage } from './angry.page';

describe('AngryPage', () => {
  let component: AngryPage;
  let fixture: ComponentFixture<AngryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
