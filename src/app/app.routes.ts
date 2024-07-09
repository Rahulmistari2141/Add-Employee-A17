import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { HistoryComponent } from './module/history/history.component';

export const routes: Routes = [
    
    //https://freeapi.gerasim.in/index.html

    {
        path:'', redirectTo:'login', pathMatch:'full'
    },

    {
        path:'login', 
        loadComponent:() =>
            import('../app/module/login/login.component').then((c => c.LoginComponent))
    },

    {
        path:'app-home',
        loadComponent:() =>
            import('../app/module/home/home.component').then((c => c.HomeComponent)),
    },

    {
        path:'app-history',
        loadComponent:() =>
            import('../app/module/history/history.component').then((c => c.HistoryComponent)),
    },

    {
        path:'app-report',
        loadComponent:() =>
            import('../app/module/report/report.component').then((c => c.ReportComponent)),
            // data: { breadcrumb: [{ title: 'Report', active: true }] },
    },

];
