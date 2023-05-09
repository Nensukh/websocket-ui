export interface PaymentEvent {
  txnId : number;
  amount : number;
  paymentType: string;
  txnDateTime: Date;
}


export interface PaymentSummary {
  totalCredit : number;
  totalDebit: string;
  totalBalance: Date;
}
