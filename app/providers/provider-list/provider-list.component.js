System.register(['angular2/core', 'angular2/router', '../provider.service', '../../directives/bulk-remove.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, provider_service_1, bulk_remove_directive_1;
    var ProviderListComponent;
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
            },
            function (bulk_remove_directive_1_1) {
                bulk_remove_directive_1 = bulk_remove_directive_1_1;
            }],
        execute: function() {
            ProviderListComponent = (function () {
                function ProviderListComponent(_router, _providerService) {
                    this._router = _router;
                    this._providerService = _providerService;
                    this.providers = null;
                    this.hasProvider = null;
                }
                ProviderListComponent.prototype.getProviders = function () {
                    var _this = this;
                    this._providerService.get().then(function (providers) {
                        _this.providers = providers;
                    });
                };
                ProviderListComponent.prototype.editByProvider = function (provider) {
                    this._router.navigate(['ProviderFormFromProvider', { id: provider._id }]);
                };
                ProviderListComponent.prototype.checkProviders = function (providers) {
                    var _this = this;
                    setTimeout(function () {
                        _this.hasProvider = providers.some(function (provider) { return provider.selected; });
                    }, 100);
                };
                ProviderListComponent.prototype.removeProviders = function (_a) {
                    var _this = this;
                    var value = _a.value, todosChecked = _a.todosChecked;
                    this._providerService.bulkRemove({ ids: value }).then(function () { return _this.changeProvidersView(todosChecked); });
                };
                ProviderListComponent.prototype.changeProvidersView = function (providersChecked) {
                    var index;
                    providersChecked.forEach(function (provider) {
                        index = this.providers.indexOf(provider);
                        this.providers.splice(index, 1);
                    }.bind(this));
                };
                ProviderListComponent.prototype.ngOnInit = function () {
                    return this.getProviders();
                };
                ProviderListComponent = __decorate([
                    core_1.Component({
                        selector: 'provider-list',
                        templateUrl: './dev/providers/provider-list/provider-list.template.html',
                        styleUrls: ["./src/css/btn.css"],
                        providers: [provider_service_1.ProviderService],
                        directives: [router_1.ROUTER_DIRECTIVES, bulk_remove_directive_1.BulkRemove]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, provider_service_1.ProviderService])
                ], ProviderListComponent);
                return ProviderListComponent;
            }());
            exports_1("ProviderListComponent", ProviderListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wcm92aWRlci1saXN0L3Byb3ZpZGVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFJQywrQkFBb0IsT0FBZSxFQUFVLGdCQUFnQztvQkFBekQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO29CQUh0RSxjQUFTLEdBQWUsSUFBSSxDQUFDO29CQUM3QixnQkFBVyxHQUFHLElBQUksQ0FBQztnQkFFcUQsQ0FBQztnQkFFaEYsNENBQVksR0FBWjtvQkFBQSxpQkFJQztvQkFIQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBcUI7d0JBQ3RELEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELDhDQUFjLEdBQWQsVUFBZSxRQUFRO29CQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLEVBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hFLENBQUM7Z0JBRUQsOENBQWMsR0FBZCxVQUFlLFNBQVM7b0JBQXhCLGlCQUlDO29CQUhBLFVBQVUsQ0FBQzt3QkFDVixLQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsUUFBUSxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBQ2xFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDVCxDQUFDO2dCQUVELCtDQUFlLEdBQWYsVUFBZ0IsRUFBcUI7b0JBQXJDLGlCQUVDO3dCQUZnQixnQkFBSyxFQUFFLDhCQUFZO29CQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztnQkFDbkcsQ0FBQztnQkFFRCxtREFBbUIsR0FBbkIsVUFBb0IsZ0JBQWdCO29CQUNuQyxJQUFJLEtBQUssQ0FBQztvQkFFVixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBUyxRQUFRO3dCQUN6QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUNkLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQTdDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUsMkRBQTJEO3dCQUMzRSxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDaEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsa0NBQVUsQ0FBQztxQkFDMUMsQ0FBQzs7eUNBQUE7Z0JBd0NGLDRCQUFDO1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDRCx5REFzQ0MsQ0FBQSIsImZpbGUiOiJwcm92aWRlcnMvcHJvdmlkZXItbGlzdC9wcm92aWRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4uL3Byb3ZpZGVyJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UHJvdmlkZXJTZXJ2aWNlfSBmcm9tICcuLi9wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7QnVsa1JlbW92ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9idWxrLXJlbW92ZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb3ZpZGVyLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXYvcHJvdmlkZXJzL3Byb3ZpZGVyLWxpc3QvcHJvdmlkZXItbGlzdC50ZW1wbGF0ZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbXCIuL3NyYy9jc3MvYnRuLmNzc1wiXSxcblx0cHJvdmlkZXJzOiBbUHJvdmlkZXJTZXJ2aWNlXSxcblx0ZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsIEJ1bGtSZW1vdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJMaXN0Q29tcG9uZW50IHtcblx0cHVibGljIHByb3ZpZGVyczogUHJvdmlkZXJbXSA9IG51bGw7XG5cdHB1YmxpYyBoYXNQcm92aWRlciA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Byb3ZpZGVyU2VydmljZTpQcm92aWRlclNlcnZpY2Upe31cblxuXHRnZXRQcm92aWRlcnMoKXtcblx0XHR0aGlzLl9wcm92aWRlclNlcnZpY2UuZ2V0KCkudGhlbigocHJvdmlkZXJzOiBQcm92aWRlcltdKSA9PiB7XG5cdFx0XHR0aGlzLnByb3ZpZGVycyA9IHByb3ZpZGVycztcblx0XHR9KTtcblx0fVxuXG5cdGVkaXRCeVByb3ZpZGVyKHByb3ZpZGVyKXtcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydQcm92aWRlckZvcm1Gcm9tUHJvdmlkZXInLCB7aWQ6IHByb3ZpZGVyLl9pZH1dKVxuXHR9XG5cblx0Y2hlY2tQcm92aWRlcnMocHJvdmlkZXJzKXtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuaGFzUHJvdmlkZXIgPSBwcm92aWRlcnMuc29tZShwcm92aWRlciA9PiBwcm92aWRlci5zZWxlY3RlZCk7XG5cdFx0fSwgMTAwKTtcblx0fVxuXG5cdHJlbW92ZVByb3ZpZGVycyh7dmFsdWUsIHRvZG9zQ2hlY2tlZH0pe1xuXHRcdHRoaXMuX3Byb3ZpZGVyU2VydmljZS5idWxrUmVtb3ZlKHtpZHM6IHZhbHVlfSkudGhlbigoKSA9PiB0aGlzLmNoYW5nZVByb3ZpZGVyc1ZpZXcodG9kb3NDaGVja2VkKSk7XG5cdH1cblxuXHRjaGFuZ2VQcm92aWRlcnNWaWV3KHByb3ZpZGVyc0NoZWNrZWQpe1xuXHRcdHZhciBpbmRleDtcblxuXHRcdHByb3ZpZGVyc0NoZWNrZWQuZm9yRWFjaChmdW5jdGlvbihwcm92aWRlcil7XG5cdFx0XHRpbmRleCA9IHRoaXMucHJvdmlkZXJzLmluZGV4T2YocHJvdmlkZXIpO1xuXHRcdFx0dGhpcy5wcm92aWRlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9LmJpbmQodGhpcykpXG5cdH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UHJvdmlkZXJzKCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
