import { async, TestBed } from '@angular/core/testing';
import { TwitComponent } from './twit.component';
describe('TwitComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TwitComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TwitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/gugs/sites/sylz/app/src/app/twit/twit.component.spec.js.map