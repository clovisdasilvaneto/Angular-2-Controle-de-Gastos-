System.register(['angular2/core', './contact.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1, router_2;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewContactComponent.prototype.addContact = function () {
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = { name: this._routeParams.get('name'), profession: '', gender: '' };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\tCreate a new contact\n\t\t<form #myForm=\"ngForm\" (ngSubmit)=\"addContact(gender)\">\n\t\t\t<div>\n\t\t\t\t<label>Name: </label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"newContact.name\" #name=\"ngForm\" ngControl=\"name\" required />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Gender: </label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"newContact.gender\" #gender=\"ngForm\" ngControl=\"gender\" required />\n\t\t\t\t<span *ngIf=\"!gender.valid && gender.dirty\">Gender is required</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Profession: </label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"newContact.profession\" #profession=\"ngForm\" ngControl=\"profession\" required />\n\t\t\t</div>\n\t\t\t<button [disabled]=\"!myForm.form.valid\">Add Contact</button>\n\t\t</form>\n    ",
                        styles: ["\n\t\t.ng-dirty.ng-invalid {\n\t\t\tborder:solid 1px red;\n\t\t\toutline:none;\n\t\t\tbox-shadow: inset 0 0 3px red;\n\t\t}\n\n\t\t.ng-dirty.ng-valid {\n\t\t\tborder:solid 1px green;\n\t\t\toutline:none;\n\t\t\tbox-shadow: inset 0 0 3px green;\n\t\t}\n\n\t\tbutton[disabled] {\n\t\t\tbackground:#ccc;\n\t\t\tcolor: #000;\n\t\t\tborder: solid 1px #ccc;\n\t\t}\n\n\t\tbutton {\n\t\t\tbackground: green;\n\t\t\tcolor: #fff;\n\t\t\tpadding:10px;\n\t\t\tborder-radius:4px;\n\t\t\tborder: solid 1px green;\n\t\t}\n\t"],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_2.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5REE7Z0JBR0MsNkJBQW9CLGVBQStCLEVBQVUsT0FBZSxFQUFVLFlBQXlCO29CQUEzRixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUVsSCx3Q0FBVSxHQUFWO29CQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO2dCQUNwQyxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDckYsQ0FBQztnQkE5REY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsK3hCQWtCVDt3QkFDSixNQUFNLEVBQUUsQ0FBQyxnZ0JBMEJSLENBQUM7d0JBQ0YsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDM0IsQ0FBQzs7dUNBQUE7Z0JBZUYsMEJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHFEQWFDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdENyZWF0ZSBhIG5ldyBjb250YWN0XG5cdFx0PGZvcm0gI215Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJhZGRDb250YWN0KGdlbmRlcilcIj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxsYWJlbD5OYW1lOiA8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5ld0NvbnRhY3QubmFtZVwiICNuYW1lPVwibmdGb3JtXCIgbmdDb250cm9sPVwibmFtZVwiIHJlcXVpcmVkIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxsYWJlbD5HZW5kZXI6IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5nZW5kZXJcIiAjZ2VuZGVyPVwibmdGb3JtXCIgbmdDb250cm9sPVwiZ2VuZGVyXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCIhZ2VuZGVyLnZhbGlkICYmIGdlbmRlci5kaXJ0eVwiPkdlbmRlciBpcyByZXF1aXJlZDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGxhYmVsPlByb2Zlc3Npb246IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5wcm9mZXNzaW9uXCIgI3Byb2Zlc3Npb249XCJuZ0Zvcm1cIiBuZ0NvbnRyb2w9XCJwcm9mZXNzaW9uXCIgcmVxdWlyZWQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiIW15Rm9ybS5mb3JtLnZhbGlkXCI+QWRkIENvbnRhY3Q8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG4gICAgYCxcblx0c3R5bGVzOiBbYFxuXHRcdC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcblx0XHRcdGJvcmRlcjpzb2xpZCAxcHggcmVkO1xuXHRcdFx0b3V0bGluZTpub25lO1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZWQ7XG5cdFx0fVxuXG5cdFx0Lm5nLWRpcnR5Lm5nLXZhbGlkIHtcblx0XHRcdGJvcmRlcjpzb2xpZCAxcHggZ3JlZW47XG5cdFx0XHRvdXRsaW5lOm5vbmU7XG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IGdyZWVuO1xuXHRcdH1cblxuXHRcdGJ1dHRvbltkaXNhYmxlZF0ge1xuXHRcdFx0YmFja2dyb3VuZDojY2NjO1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuXHRcdH1cblxuXHRcdGJ1dHRvbiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBncmVlbjtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0cGFkZGluZzoxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czo0cHg7XG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcblx0XHR9XG5cdGBdLFxuXHRwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0bmV3Q29udGFjdDogQ29udGFjdDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpe31cblxuXHRhZGRDb250YWN0KCl7XG5cdFx0dGhpcy5fY29udGFjdFNlcnZpY2UuaW5zZXJ0Q29udGFjdCh0aGlzLm5ld0NvbnRhY3QpO1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbnRhY3RzJ10pXG5cdH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5uZXdDb250YWN0ID0ge25hbWU6IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbmFtZScpLCBwcm9mZXNzaW9uOiAnJywgZ2VuZGVyOiAnJ307XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
