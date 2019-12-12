import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HappyPage } from './happy.page';

describe('HappyPage', () => {
  let component: HappyPage;
  let fixture: ComponentFixture<HappyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HappyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
