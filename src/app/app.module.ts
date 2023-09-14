import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { ContentComponent } from './content/content.component';
import { ContentUsuallyBuyComponent } from './content-usually-buy/content-usually-buy.component';
import { ContentFavoritProductComponent } from './content-favorit-product/content-favorit-product.component';
import { ContentNewComponent } from './content-new/content-new.component';
import { ContentPolicyComponent } from './content-policy/content-policy.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    ContentMainComponent,
    ContentComponent,
    ContentUsuallyBuyComponent,
    ContentFavoritProductComponent,
    ContentNewComponent,
    ContentPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
