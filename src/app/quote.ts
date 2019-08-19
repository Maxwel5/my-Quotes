export class Quote {
    public showQuote: boolean;
    constructor(public quote: string, public author: string, public submitter: string, public completeDate: Date){
        this.showQuote=false;
    }
}