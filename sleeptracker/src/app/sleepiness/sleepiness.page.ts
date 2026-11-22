import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonDatetime, IonDatetimeButton,
  IonHeader, IonIcon, IonLabel, IonModal, IonSegment, IonSegmentButton, IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {StanfordSleepinessData} from "../data/stanford-sleepiness-data";

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonDatetime, IonDatetimeButton, IonIcon, IonLabel, IonModal, IonSegment, IonSegmentButton, IonSelect, IonSelectOption]
})
export class SleepinessPage implements OnInit {

  public sleepinessRating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  protected readonly StanfordSleepinessData = StanfordSleepinessData;
}
