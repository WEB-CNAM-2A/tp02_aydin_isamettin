import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';


export const routes: Routes = [
    { path: 'formulaire', component: FormulaireComponent },
    { path: 'recapitulatif', component: RecapitulatifComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];
