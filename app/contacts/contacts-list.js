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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.contacts = [
                        { name: 'Clóvis Neto', gender: 'Male', profession: 'Frontend Consultant' },
                        { name: 'Iran silva', gender: 'Male', profession: 'Designer Consultant' },
                        { name: 'Micheli', gender: 'Female', profession: 'Estilist' },
                    ];
                    this.showDetails = false;
                    this.openDetails = function () {
                        this.showDetails = true;
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<ul *ngIf=\"showDetails\">\n\t\t\t<li>Name: {{contacts[0].name}}</li>\n\t\t\t<li>Gender: {{contacts[0].gender}}</li>\n\t\t\t<li>Profession: {{contacts[0].profession}}</li>\n\t\t\t<li>Edit name: <input [(ngModel)]=\"contacts[0].name\" type=\"text\" /></li>\n\t\t</ul>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3RzLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDUSxhQUFRLEdBQUc7d0JBQ2pCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBQzt3QkFDekUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFDO3dCQUN4RSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFDO3FCQUM1RCxDQUFDO29CQUVLLGdCQUFXLEdBQUcsS0FBSyxDQUFDO29CQUUzQixnQkFBVyxHQUFHO3dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDLENBQUE7Z0JBQ0YsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHdSQU9UO3FCQUNKLENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx1Q0FZQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3RzLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDx1bCAqbmdJZj1cInNob3dEZXRhaWxzXCI+XG5cdFx0XHQ8bGk+TmFtZToge3tjb250YWN0c1swXS5uYW1lfX08L2xpPlxuXHRcdFx0PGxpPkdlbmRlcjoge3tjb250YWN0c1swXS5nZW5kZXJ9fTwvbGk+XG5cdFx0XHQ8bGk+UHJvZmVzc2lvbjoge3tjb250YWN0c1swXS5wcm9mZXNzaW9ufX08L2xpPlxuXHRcdFx0PGxpPkVkaXQgbmFtZTogPGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdHNbMF0ubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz48L2xpPlxuXHRcdDwvdWw+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0cHVibGljIGNvbnRhY3RzID0gW1xuXHRcdHsgbmFtZTogJ0Nsw7N2aXMgTmV0bycsIGdlbmRlcjogJ01hbGUnLCBwcm9mZXNzaW9uOiAnRnJvbnRlbmQgQ29uc3VsdGFudCd9LFxuXHRcdHsgbmFtZTogJ0lyYW4gc2lsdmEnLCBnZW5kZXI6ICdNYWxlJywgcHJvZmVzc2lvbjogJ0Rlc2lnbmVyIENvbnN1bHRhbnQnfSxcblx0XHR7IG5hbWU6ICdNaWNoZWxpJywgZ2VuZGVyOiAnRmVtYWxlJywgcHJvZmVzc2lvbjogJ0VzdGlsaXN0J30sXG5cdF07XG5cblx0cHVibGljIHNob3dEZXRhaWxzID0gZmFsc2U7XG5cblx0b3BlbkRldGFpbHMgPSBmdW5jdGlvbigpe1xuXHRcdHRoaXMuc2hvd0RldGFpbHMgPSB0cnVlO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
