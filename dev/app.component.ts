import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {NavComponent} from './nav/nav.component';
import {PaymentListComponent} from './payments/payment-list/payment-list.component';
import {PaymentformComponent} from './payments/payment-form/payment-form.component';
import {ProviderListComponent} from './providers/provider-list/provider-list.component';
import {ProviderFormComponent} from './providers/provider-form/provider-form.component';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from './contacts/new-contact.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
		<navbar></navbar>
		<div class="container-fluid">
			<router-outlet></router-outlet>
		</div>
    `,
	directives: [NavComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
	{path: '/payments', name:'Payments', component: PaymentListComponent, useAsDefault: true},
	{path: '/payment-form', name:'PaymentForm', component: PaymentformComponent},
	{path: '/payment-form/:id', name:'PaymentFormFromPayment', component: PaymentformComponent},
	{path: '/providers', name:'Providers', component: ProviderListComponent},
	{path: '/provider-form', name:'ProviderForm', component: ProviderFormComponent},
	{path: '/provider-form/:id', name:'ProviderFormFromProvider', component: ProviderFormComponent},
	{path: '/contacts', name:'Contacts', component: ContactListComponent},
	{path: '/newContact', name:'NewContact', component: NewContactComponent},
	{path: '/newContact/:name', name:'NewContactFromContact', component: NewContactComponent}
])
export class AppComponent {

}
