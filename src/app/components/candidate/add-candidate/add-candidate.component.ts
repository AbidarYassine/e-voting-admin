import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Candidate} from '../../../models/candidate';
import {CandidateService} from '../../../services/candidate.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCandidateComponent {

  regions = ['casa', 'Marrkech', 'Taza'];

  constructor(
    public dialogRef: MatDialogRef<AddCandidateComponent>,
    private candidat_Service: CandidateService,
  ) {
  }

  submitForm(f: any) {
    const candidat: Candidate = f.value;
    this.candidat_Service.create(candidat).subscribe((data) => {
      console.log(data);
      this.dialogRef.close();
    });
    console.log(candidat);
  }

  log(email: any) {
    console.log(email);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
