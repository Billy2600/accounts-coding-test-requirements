export class AccountViewModel {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    AmountDue: number;
    PaymentDueDate: string;
    AccountStatusId: number;
}

export enum AccountStatuses
{
    Active,
    Inactive,
    Overdue
}