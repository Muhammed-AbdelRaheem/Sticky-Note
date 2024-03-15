import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NoteService } from 'src/Core/note.service';
import { ToastrService } from 'ngx-toastr';
import { NoteData } from 'src/Core/note-data';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _NoteService: NoteService
    , private _ToastrService: ToastrService) { }


  noteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null)
  })
  editeNoteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null)
  })

  note: NoteData[] = []
  searchKey:string = ''
  id: string = ""
  ngOnInit(): void {
    this.getnotes()
  }
  getnotes() {
    this._NoteService.getnote().subscribe({
      next: data => {
        this.note = data.notes
        console.log(data)
      },
      error: error => { console.log(error) }

    })
  }

  addNote(noteForm: FormGroup) {
    this._NoteService.addnote(noteForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.noteForm.reset();
        this.getnotes()
        this._ToastrService.success( 'Your Note Added Successfully');

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getid(id: any) {
    this.id = id;
    console.log(id);

  }

  editNote(editeNoteForm: FormGroup) {
    this._NoteService.updatenote(this.id,editeNoteForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.getnotes()
        this._ToastrService.success( 'Your Note Updated Successfully');

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  removeNote(id:string) {
    this._NoteService.deletenote(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getnotes()
        this._ToastrService.success('Your Note deleted Successfully');

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
