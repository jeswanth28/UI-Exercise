import { Component,Input } from '@angular/core';
import { Faqs } from './../models/faqs-model';

@Component({
  selector: 'app-help-questions',
  templateUrl: './help-questions.component.html',
  styleUrls: ['./help-questions.component.scss'],
})

export class HelpQuestionsComponent  {
  @Input()faqsData: Faqs[] = [];

  selectedItem(selectedFaqs: Faqs) {
    this.faqsData = this.faqsData.map((qs) => {
      qs.hidden = selectedFaqs.id == qs.id ? !selectedFaqs.hidden : true;
      return qs;
    });
  }
}
