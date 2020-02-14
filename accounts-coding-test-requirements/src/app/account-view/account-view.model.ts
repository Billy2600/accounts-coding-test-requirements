export class AccountViewModel {
    public Id: number;
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public PhoneNumber: string;
    public AmountDue: number;
    public PaymentDueDate: string;
    public AccountStatusId: number;

    public deserialize(input: any) {
        return Object.assign(this, input);
    };
}

export enum AccountStatuses
{
    Active,
    Inactive,
    Overdue
}