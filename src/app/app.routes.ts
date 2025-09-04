import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AskQuestionComponent } from './pages/ask-question/ask-question';
import { AdviceComponent } from './pages/advice/advice';
import { FeedbackComponent } from './pages/feedback/feedback';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ask-question', component: AskQuestionComponent },
  { path: 'advice', component: AdviceComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
