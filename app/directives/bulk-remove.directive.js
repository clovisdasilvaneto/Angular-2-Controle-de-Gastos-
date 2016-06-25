System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BulkRemove;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BulkRemove = (function () {
                function BulkRemove() {
                    this.confirmMsg = "";
                    this.errorMsg = "";
                    this.todos = [];
                    this.hasTodo = {};
                    this.passedRemoveTodos = new core_1.EventEmitter();
                }
                BulkRemove.prototype.removeTodos = function (todos) {
                    var todosChecked = todos.filter(function (obj) { return obj.selected; }), data;
                    if (!todosChecked.length) {
                        alert(this.errorMsg);
                        return;
                    }
                    else if (confirm(this.confirmMsg)) {
                        data = todosChecked.map(function (obj) { return obj._id; });
                        this.passedRemoveTodos.emit({
                            value: data,
                            todosChecked: todosChecked
                        });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BulkRemove.prototype, "confirmMsg", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BulkRemove.prototype, "errorMsg", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BulkRemove.prototype, "todos", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BulkRemove.prototype, "hasTodo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BulkRemove.prototype, "passedRemoveTodos", void 0);
                BulkRemove = __decorate([
                    core_1.Component({
                        selector: 'bulk-remove',
                        styleUrls: ["./src/css/btn.css"],
                        template: "\n\t\t<button class=\"btn btn-danger\" (click)=\"removeTodos(todos)\" *ngIf=\"hasTodo\">Delete</button>\n\t",
                        inputs: ["confirmMsg", "errorMsg", "todos", "hasTodo"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BulkRemove);
                return BulkRemove;
            }());
            exports_1("BulkRemove", BulkRemove);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYnVsay1yZW1vdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7b0JBQ1UsZUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxVQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNYLFlBQU8sR0FBRyxFQUFFLENBQUM7b0JBQ1osc0JBQWlCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBa0JsRCxDQUFDO2dCQWhCQyxnQ0FBVyxHQUFYLFVBQVksS0FBSztvQkFDbEIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxRQUFRLEVBQVosQ0FBWSxDQUFDLEVBQ25ELElBQUksQ0FBQztvQkFFTixFQUFFLENBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUM7b0JBQ1IsQ0FBQztvQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsRUFBUCxDQUFPLENBQUMsQ0FBQzt3QkFFeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQzs0QkFDM0IsS0FBSyxFQUFFLElBQUk7NEJBQ1gsWUFBWSxFQUFFLFlBQVk7eUJBQzFCLENBQUMsQ0FBQTtvQkFDSCxDQUFDO2dCQUNBLENBQUM7Z0JBckJGO29CQUFDLFlBQUssRUFBRTs7OERBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs0REFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O3lEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7MkRBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOztxRUFBQTtnQkFiVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDaEMsUUFBUSxFQUFFLDZHQUVUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztxQkFDdEQsQ0FBQzs7OEJBQUE7Z0JBd0JGLGlCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxtQ0F1QkMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2J1bGstcmVtb3ZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvdW50ZXIuY29tcG9uZW50LnRzXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYnVsay1yZW1vdmUnLFxuXHRzdHlsZVVybHM6IFtcIi4vc3JjL2Nzcy9idG4uY3NzXCJdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJyZW1vdmVUb2Rvcyh0b2RvcylcIiAqbmdJZj1cImhhc1RvZG9cIj5EZWxldGU8L2J1dHRvbj5cblx0YCxcblx0aW5wdXRzOiBbXCJjb25maXJtTXNnXCIsIFwiZXJyb3JNc2dcIiwgXCJ0b2Rvc1wiLCBcImhhc1RvZG9cIl1cbn0pXG5leHBvcnQgY2xhc3MgQnVsa1JlbW92ZSB7XG5cdEBJbnB1dCgpIGNvbmZpcm1Nc2cgPSBcIlwiO1xuXHRASW5wdXQoKSBlcnJvck1zZyA9IFwiXCI7XG5cdEBJbnB1dCgpIHRvZG9zID0gW107XG5cdEBJbnB1dCgpIGhhc1RvZG8gPSB7fTtcblx0QE91dHB1dCgpIHBhc3NlZFJlbW92ZVRvZG9zID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJlbW92ZVRvZG9zKHRvZG9zKSB7XG5cdHZhciB0b2Rvc0NoZWNrZWQgPSB0b2Rvcy5maWx0ZXIob2JqID0+IG9iai5zZWxlY3RlZCksXG5cdFx0ZGF0YTtcblxuXHRpZighdG9kb3NDaGVja2VkLmxlbmd0aCl7XG5cdFx0YWxlcnQodGhpcy5lcnJvck1zZyk7XG5cdFx0cmV0dXJuO1xuXHR9ZWxzZSBpZiAoY29uZmlybSh0aGlzLmNvbmZpcm1Nc2cpKSB7XG5cdFx0ZGF0YSA9IHRvZG9zQ2hlY2tlZC5tYXAob2JqID0+IG9iai5faWQpO1xuXG5cdFx0dGhpcy5wYXNzZWRSZW1vdmVUb2Rvcy5lbWl0KHtcblx0XHRcdHZhbHVlOiBkYXRhLFxuXHRcdFx0dG9kb3NDaGVja2VkOiB0b2Rvc0NoZWNrZWRcblx0XHR9KVxuXHR9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
