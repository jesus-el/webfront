import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { AreasComponent } from './areas/areas.component';
import { SectionsComponent } from './sections/sections.component';
import { BooksComponent } from './books/books.component';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
  declarations: [CategoriesComponent, AuthorsComponent, AreasComponent, SectionsComponent, BooksComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
