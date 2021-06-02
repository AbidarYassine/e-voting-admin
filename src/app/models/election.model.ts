export class Election {
  public electionId: string;
  public name: string;
  public year: number;
  public startDate: Date;
  public endDate: Date;
  public type: string;

  constructor() {
    this.electionId = '';
    this.name = '';
    this.year = 0;
    this.startDate = new Date();
    this.endDate = new Date();
    this.type = 'election';
  }

}
