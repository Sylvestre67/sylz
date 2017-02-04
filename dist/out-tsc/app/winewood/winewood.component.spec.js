import { async, TestBed } from '@angular/core/testing';
import { WinewoodComponent } from './winewood.component';
describe('WinewoodComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WinewoodComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WinewoodComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/gugs/sites/sylz/app/src/app/winewood/winewood.component.spec.js.map