System.register(['angular2/core', './contact.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                    this.contacts = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) {
                        console.log(contacts.length);
                        _this.contacts = contacts;
                    });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    return this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: './dev/contacts/contact-list.template.html',
                        providers: [contact_service_1.ContactService],
                        directives: [contact_component_1.ContactComponent]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFHQyw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFGNUMsb0JBQWUsR0FBWSxJQUFJLENBQUM7b0JBQ2hDLGFBQVEsR0FBYyxJQUFJLENBQUM7Z0JBQ21CLENBQUM7Z0JBRXRELHVDQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDBDQUFXLEdBQVg7b0JBQUEsaUJBS0M7b0JBSkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQjt3QkFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO29CQUN6QixDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkF6QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDM0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsVUFBVSxFQUFDLENBQUMsb0NBQWdCLENBQUM7cUJBQzdCLENBQUM7O3dDQUFBO2dCQXFCRiwyQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsdURBbUJDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29udGFjdC1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV2L2NvbnRhY3RzL2NvbnRhY3QtbGlzdC50ZW1wbGF0ZS5odG1sJyxcblx0cHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdLFxuXHRkaXJlY3RpdmVzOltDb250YWN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IHtcblx0cHVibGljIHNlbGVjdGVkQ29udGFjdDogQ29udGFjdCA9IG51bGw7XG5cdHB1YmxpYyBjb250YWN0czogQ29udGFjdFtdID0gbnVsbDtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKXt9XG5cblx0b25TZWxlY3QoY29udGFjdCl7XG5cdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuXHR9XG5cblx0Z2V0Q29udGFjdHMoKXtcblx0XHR0aGlzLl9jb250YWN0U2VydmljZS5nZXRDb250YWN0cygpLnRoZW4oKGNvbnRhY3RzOiBDb250YWN0W10pID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGNvbnRhY3RzLmxlbmd0aClcblx0XHRcdHRoaXMuY29udGFjdHMgPSBjb250YWN0c1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHJldHVybiB0aGlzLmdldENvbnRhY3RzKCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
