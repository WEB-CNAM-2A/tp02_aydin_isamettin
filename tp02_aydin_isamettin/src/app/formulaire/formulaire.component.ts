import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  nom = '';
  prenom = '';
  adresse = '';
  codePostal = '';
  ville = '';
  telephone = '';
  email = '';
  civilite = '';
  password = '';
  login = '';
  pays = '';

  btnDisabled = true;

checkForm() {
    if (this.nom !== '' && this.prenom !== '' && this.adresse !== '' && this.codePostal !== '' && this.ville !== '' && this.telephone !== '' && this.email !== '' && this.civilite !== '' && this.password !== '' && this.login !== '' && this.pays !== '') {
        this.btnDisabled = false;
    } else {
        this.btnDisabled = true;
    }
}
  
onSubmit() {
    console.log('Formulaire soumis');
}

}
