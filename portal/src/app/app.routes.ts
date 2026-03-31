import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tutorials } from './pages/tutorials/tutorials';
import { Documents } from './pages/documents/documents';
import { Bio } from './pages/bio/bio';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'tutorials',component:Tutorials},
    {path:'documents',component:Documents},
    {path:'bio',component:Bio},
];
