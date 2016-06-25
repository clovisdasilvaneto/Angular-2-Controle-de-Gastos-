System.register(['angular2/core', 'angular2/router', '../provider.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, provider_service_1;
    var ProviderFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            }],
        execute: function() {
            ProviderFormComponent = (function () {
                function ProviderFormComponent(_router, _routeParams, _providerService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._providerService = _providerService;
                }
                ProviderFormComponent.prototype.getProviders = function () {
                    var _this = this;
                    this.isEdit = true;
                    this._providerService.getById({
                        _id: this._routeParams.get('id')
                    }).then(function (provider) {
                        _this.provider = provider;
                    });
                };
                ProviderFormComponent.prototype.removeProviders = function (provider) {
                    var _this = this;
                    if (confirm("You sure you want to delete this record ?")) {
                        this._providerService.remove(provider).then(function (resp) {
                            _this._router.navigate(['Providers']);
                        });
                    }
                };
                ProviderFormComponent.prototype.checkProvider = function (providerForm, provider) {
                    if (!providerForm.form.valid) {
                        this.errorMsg = "Please, fill all fields in red";
                        return;
                    }
                    if (this.isEdit) {
                        return this.saveProvider(provider);
                    }
                    else {
                        return this.addProvider(provider);
                    }
                };
                ProviderFormComponent.prototype.saveProvider = function (provider) {
                    var _this = this;
                    this._providerService.save(provider).then(function () {
                        _this._router.navigate(['Providers']);
                    });
                };
                ProviderFormComponent.prototype.addProvider = function (provider) {
                    var _this = this;
                    this._providerService.save(provider).then(function (resp) {
                        _this._router.navigate(['Providers']);
                    });
                };
                ProviderFormComponent.prototype.ngOnInit = function () {
                    this.provider = { name: '', account_number: '' };
                    if (this._routeParams.get('id')) {
                        return this.getProviders();
                    }
                };
                ProviderFormComponent = __decorate([
                    core_1.Component({
                        selector: 'provider-form',
                        templateUrl: './dev/providers/provider-form/provider-form.template.html',
                        styleUrls: ["./src/css/btn.css"],
                        providers: [provider_service_1.ProviderService],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, provider_service_1.ProviderService])
                ], ProviderFormComponent);
                return ProviderFormComponent;
            }());
            exports_1("ProviderFormComponent", ProviderFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wcm92aWRlci1mb3JtL3Byb3ZpZGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUtDLCtCQUFvQixPQUFlLEVBQVUsWUFBeUIsRUFDM0QsZ0JBQWlDO29CQUR4QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUMzRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFFLENBQUM7Z0JBRS9DLDRDQUFZLEdBQVo7b0JBQUEsaUJBT0M7b0JBTkEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7d0JBQzdCLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFrQjt3QkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsK0NBQWUsR0FBZixVQUFnQixRQUFRO29CQUF4QixpQkFNQztvQkFMQSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTs0QkFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDLENBQUMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsNkNBQWEsR0FBYixVQUFjLFlBQVksRUFBRSxRQUFRO29CQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQ0FBZ0MsQ0FBQzt3QkFDakQsTUFBTSxDQUFDO29CQUNSLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLENBQUM7b0JBQUEsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0YsQ0FBQztnQkFFRCw0Q0FBWSxHQUFaLFVBQWEsUUFBUTtvQkFBckIsaUJBSUM7b0JBSEEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3pDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCwyQ0FBVyxHQUFYLFVBQVksUUFBUTtvQkFBcEIsaUJBSUM7b0JBSEEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3dCQUM5QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFDLENBQUE7b0JBRTlDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDNUIsQ0FBQztnQkFFRixDQUFDO2dCQWpFRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUsMkRBQTJEO3dCQUMzRSxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDaEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsVUFBVSxFQUFDLEVBQUU7cUJBQ2IsQ0FBQzs7eUNBQUE7Z0JBNERGLDRCQUFDO1lBQUQsQ0ExREEsQUEwREMsSUFBQTtZQTFERCx5REEwREMsQ0FBQSIsImZpbGUiOiJwcm92aWRlcnMvcHJvdmlkZXItZm9ybS9wcm92aWRlci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4uL3Byb3ZpZGVyJztcbmltcG9ydCB7UHJvdmlkZXJTZXJ2aWNlfSBmcm9tICcuLi9wcm92aWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm92aWRlci1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV2L3Byb3ZpZGVycy9wcm92aWRlci1mb3JtL3Byb3ZpZGVyLWZvcm0udGVtcGxhdGUuaHRtbCcsXG5cdHN0eWxlVXJsczogW1wiLi9zcmMvY3NzL2J0bi5jc3NcIl0sXG5cdHByb3ZpZGVyczogW1Byb3ZpZGVyU2VydmljZV0sXG5cdGRpcmVjdGl2ZXM6W11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlckZvcm1Db21wb25lbnQge1xuXHRwdWJsaWMgcHJvdmlkZXI6IFByb3ZpZGVyO1xuXHRwdWJsaWMgaXNFZGl0O1xuXHRwdWJsaWMgZXJyb3JNc2c7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRcdFx0cHJpdmF0ZSBfcHJvdmlkZXJTZXJ2aWNlOiBQcm92aWRlclNlcnZpY2Upe31cblxuXHRnZXRQcm92aWRlcnMoKXtcblx0XHR0aGlzLmlzRWRpdCA9IHRydWU7XG5cdFx0dGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmdldEJ5SWQoe1xuXHRcdFx0X2lkOiB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJylcblx0XHR9KS50aGVuKChwcm92aWRlcjogUHJvdmlkZXIpID0+IHtcblx0XHRcdHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZVByb3ZpZGVycyhwcm92aWRlcil7XG5cdFx0aWYoY29uZmlybShcIllvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZCA/XCIpKXtcblx0XHRcdHRoaXMuX3Byb3ZpZGVyU2VydmljZS5yZW1vdmUocHJvdmlkZXIpLnRoZW4oKHJlc3ApPT57XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1Byb3ZpZGVycyddKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrUHJvdmlkZXIocHJvdmlkZXJGb3JtLCBwcm92aWRlcil7XG5cdFx0aWYoIXByb3ZpZGVyRm9ybS5mb3JtLnZhbGlkKXtcblx0XHRcdHRoaXMuZXJyb3JNc2cgPSBcIlBsZWFzZSwgZmlsbCBhbGwgZmllbGRzIGluIHJlZFwiO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuaXNFZGl0KXtcblx0XHRcdHJldHVybiB0aGlzLnNhdmVQcm92aWRlcihwcm92aWRlcik7XG5cdFx0fWVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIocHJvdmlkZXIpO1xuXHRcdH1cblx0fVxuXG5cdHNhdmVQcm92aWRlcihwcm92aWRlcil7XG5cdFx0dGhpcy5fcHJvdmlkZXJTZXJ2aWNlLnNhdmUocHJvdmlkZXIpLnRoZW4oKCk9Pntcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1Byb3ZpZGVycyddKTtcblx0XHR9KTtcblx0fVxuXG5cdGFkZFByb3ZpZGVyKHByb3ZpZGVyKXtcblx0XHR0aGlzLl9wcm92aWRlclNlcnZpY2Uuc2F2ZShwcm92aWRlcikudGhlbigocmVzcCk9Pntcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1Byb3ZpZGVycyddKTtcblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLnByb3ZpZGVyID0ge25hbWU6ICcnLCBhY2NvdW50X251bWJlcjogJyd9XG5cblx0XHRpZih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJykpe1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UHJvdmlkZXJzKCk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
