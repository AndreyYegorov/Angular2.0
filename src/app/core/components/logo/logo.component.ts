import {Component} from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styles: [require('./logo.component.scss')]
})
export class LogoComponent {
    public logoImgPath: string = '/assets/img/angular-logo.png';
    public logoHeading: string = 'Logo';
}
