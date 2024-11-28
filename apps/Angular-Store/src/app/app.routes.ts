import { Route } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './Card/Card.component';


export const appRoutes: Route[] = [


    { path: "registrar", component: FormsComponent,},
        
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "**", component: CardComponent }
    

 

];
