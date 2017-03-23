import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'course-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./course-search.component.scss')],
    templateUrl: './course-search.component.html'
})
export class CourseSearchComponent {
    @Output() public onSearch = new EventEmitter<string>();

    public searchQuery: string;

    constructor() {
        this.searchQuery = '';
    }

    public findCourse(): void {
        this.onSearch.emit(this.searchQuery);
    }

}
