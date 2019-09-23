import { Directive, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[appClickOutside]'
})
export class TableDirectiveDirective {

	@Output() appClickOutside = new EventEmitter<MouseEvent | KeyboardEvent>();
	constructor(private elementRef: ElementRef) { }

	@HostListener('document:click', ['$event'])
	onDocumentClick(event: MouseEvent): void {
		const targetElement = event.target as HTMLElement;
		// Check if the click was outside the element
		if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
			this.appClickOutside.emit(event);
		}
	}

	@HostListener('window:keyup.escape', ['$event'])
	onKeyPressed(event: KeyboardEvent): void {
		this.appClickOutside.emit(event);
	}
}

