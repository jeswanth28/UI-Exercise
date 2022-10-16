import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Faqs, ServerFaqs } from './models/faqs-model';
import { FaqslistService } from './services/faqslist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  faqsData: Faqs[] = [];
  subscription!: Subscription;

  constructor(private faqaListService: FaqslistService) {}

  ngOnInit(): void {
    this.subscription = this.faqaListService.getFAQSList().subscribe((data) => {
      this.faqsData = data.map((q) => {
        return { ...q, hidden: true };
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
