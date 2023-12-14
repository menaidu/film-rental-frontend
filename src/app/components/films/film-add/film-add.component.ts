import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrl: './film-add.component.css'
})
export class FilmAddComponent {
  dataForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService
  ) {
    this.dataForm = formBuilder.group({
      filmId: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseYear: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    const response = this.dataForm.value;
    console.log(response);
    this.filmService.addFilm(response).subscribe((data) => {
      console.log('add');
    });
  }
}
