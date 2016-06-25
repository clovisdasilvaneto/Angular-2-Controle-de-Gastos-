import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Payment} from '../payment';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {PaymentService} from '../payment.service';
import {BulkRemove} from '../../directives/bulk-remove.directive';

@Component({
    selector: 'payment-list',
    templateUrl: './dev/payments/payment-list/payment-list.template.html',
	styleUrls: ["./src/css/btn.css"],
	providers: [PaymentService],
	directives:[ROUTER_DIRECTIVES, BulkRemove]
})

export class PaymentListComponent {
	public payments: Payment[] = null;
	public hasPayment = null;

	constructor(private _router: Router, private _paymentService:PaymentService){}

	getPayments(){
		this._paymentService.get().then((payments: Payment[]) => {
			this.payments = payments;
		});
	}

	editByPayment(payment){
		this._router.navigate(['PaymentFormFromPayment', {id: payment._id}])
	}

	checkPayments(payments){
		setTimeout(() => {
			this.hasPayment = payments.some(payment => payment.selected);
		}, 100);
	}

	removePayments({value, todosChecked}){
		this._paymentService.bulkRemove({ids: value}).then(() => this.changePaymentsView(todosChecked));
	}

	changePaymentsView(paymentsChecked){
		var index;

		paymentsChecked.forEach(function(payment){
			index = this.payments.indexOf(payment);
			this.payments.splice(index, 1);
		}.bind(this))
	}

	ngOnInit():any {
		return this.getPayments();
	}
}
