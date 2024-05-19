export class Account {
    constructor(
        public AccId:number,
        public  CustId:number,
        public  BranchId :number,
        public  NoOfFreeWithdrawal: number,
        public  NoOfFreeDepoit :number,
        public  AccountType :string,
        public  Balance :number,
        public  IsActive :number,
        public  IsCheckBook :number
    )
    {
       
    }
}