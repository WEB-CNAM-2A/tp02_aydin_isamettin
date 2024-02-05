import { Component } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [],
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.css'
})
export class RecapitulatifComponent {
  nom = 'TEST';
  prenom = 'TEST';
  adresse = 'TEST';
  codePostal = 'TEST';
  ville = 'TEST';
  telephone = 'TEST';
  email = 'TEST';
  civilite = 'TEST';
  password = 'TEST';
  login = 'TEST';
  pays = 'TEST';

  isVisible = false;
}
