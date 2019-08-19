export class Quote {
    showDescription: boolean;
    public downvote: number;
    public upvote: number;
    constructor(public quote: string,public author: string,public provider: string, public completeDate: Date){
      this.showDescription=false;
      this.downvote = 0;
      this.upvote = 0;
    }
  }