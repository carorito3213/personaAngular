import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { PersonaInterface } from '../../interfaces/persona.interface';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent implements OnInit{

  
  personaList: PersonaInterface[]=[];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe({
      next: (result) => {
        this.personaList = result;
      }, 
      error: (err) =>{
        console.log(err);
      }
    })

  }
}
