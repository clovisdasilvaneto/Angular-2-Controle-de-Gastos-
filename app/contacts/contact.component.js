System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onCreateNew = function () {
                    // this._router.navigate(['NewContact', {name: this.contact.name}])
                    this._router.navigate(['NewContactFromContact', { name: this.contact.name }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n\t\t<p [class.clicked]=\"contact\" *ngIf=\"contact\">Hello World! My name is {{contact.name}}</p>\n\n\t\t<ul *ngIf=\"contact\">\n\t\t\t<li>Name: {{contact.name}}</li>\n\t\t\t<li>Gender: {{contact.gender}}</li>\n\t\t\t<li>Profession: {{contact.profession}}</li>\n\t\t\t<li><button (click)=\"onCreateNew()\">Criar novo registro \u00E0 partir deste contato</button></li>\n\t\t</ul>\n    ",
                        inputs: ["contact"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUdDLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRjVCLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBRU0sQ0FBQztnQkFFdEMsc0NBQVcsR0FBWDtvQkFDQyxtRUFBbUU7b0JBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVFLENBQUM7Z0JBdEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxvWUFTVDt3QkFDSixNQUFNLEVBQUMsQ0FBQyxTQUFTLENBQUM7cUJBQ2xCLENBQUM7O29DQUFBO2dCQVVGLHVCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwrQ0FTQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29udGFjdCcsXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8cCBbY2xhc3MuY2xpY2tlZF09XCJjb250YWN0XCIgKm5nSWY9XCJjb250YWN0XCI+SGVsbG8gV29ybGQhIE15IG5hbWUgaXMge3tjb250YWN0Lm5hbWV9fTwvcD5cblxuXHRcdDx1bCAqbmdJZj1cImNvbnRhY3RcIj5cblx0XHRcdDxsaT5OYW1lOiB7e2NvbnRhY3QubmFtZX19PC9saT5cblx0XHRcdDxsaT5HZW5kZXI6IHt7Y29udGFjdC5nZW5kZXJ9fTwvbGk+XG5cdFx0XHQ8bGk+UHJvZmVzc2lvbjoge3tjb250YWN0LnByb2Zlc3Npb259fTwvbGk+XG5cdFx0XHQ8bGk+PGJ1dHRvbiAoY2xpY2spPVwib25DcmVhdGVOZXcoKVwiPkNyaWFyIG5vdm8gcmVnaXN0cm8gw6AgcGFydGlyIGRlc3RlIGNvbnRhdG88L2J1dHRvbj48L2xpPlxuXHRcdDwvdWw+XG4gICAgYCxcblx0aW5wdXRzOltcImNvbnRhY3RcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XG5cdHB1YmxpYyBjb250YWN0OiBDb250YWN0ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7fVxuXG5cdG9uQ3JlYXRlTmV3KCl7XG5cdFx0Ly8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdCcsIHtuYW1lOiB0aGlzLmNvbnRhY3QubmFtZX1dKVxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ05ld0NvbnRhY3RGcm9tQ29udGFjdCcsIHtuYW1lOiB0aGlzLmNvbnRhY3QubmFtZX1dKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
