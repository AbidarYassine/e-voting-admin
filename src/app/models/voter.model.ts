export class Voter {
  voterId: string = '';
  nom: string;
  prenom: string;
  cin: string;
  carteIdRecto: string;
  carteIdVerso: string;
  areaId: number;
  authorized: boolean;
  rejected: boolean;
  voted: boolean = false;
  ballotId: string;
  email: string;
  type: string = 'voter';
}
