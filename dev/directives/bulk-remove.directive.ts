// counter.component.ts
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'bulk-remove',
	styleUrls: ["./src/css/btn.css"],
	template: `
		<button class="btn btn-danger" (click)="removeTodos(todos)" *ngIf="hasTodo">Delete</button>
	`,
	inputs: ["confirmMsg", "errorMsg", "todos", "hasTodo"]
})
export class BulkRemove {
	@Input() confirmMsg = "";
	@Input() errorMsg = "";
	@Input() todos = [];
	@Input() hasTodo = {};
	@Output() passedRemoveTodos = new EventEmitter();

  removeTodos(todos) {
	var todosChecked = todos.filter(obj => obj.selected),
		data;

	if(!todosChecked.length){
		alert(this.errorMsg);
		return;
	}else if (confirm(this.confirmMsg)) {
		data = todosChecked.map(obj => obj._id);

		this.passedRemoveTodos.emit({
			value: data,
			todosChecked: todosChecked
		})
	}
  }
}
