import { Injectable, inject } from '@angular/core';
import {
	MatSnackBar,
	MatSnackBarConfig,
	MatSnackBarRef,
} from '@angular/material/snack-bar';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
	providedIn: 'root',
})
export class MessageService {
	protected messageBar = inject(MatSnackBar);
	protected matBarconfigs: MatSnackBarConfig = {};

	public openMessage(
		text: string,
		actionText: string = '',
		configs: MatSnackBarConfig = this.matBarconfigs
	) {
		return this.messageBar.open(text, actionText, configs);
	}

	public openMessageFromComponent(
		component: ComponentType<any>,
		configs: MatSnackBarConfig = this.matBarconfigs
	): MatSnackBarRef<any> {
		return this.messageBar.openFromComponent(component, configs);
	}
}
