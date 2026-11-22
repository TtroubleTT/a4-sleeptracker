import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonDatetime, IonDatetimeButton,
  IonHeader, IonIcon, IonLabel, IonModal, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {StanfordSleepinessData} from "../data/stanford-sleepiness-data";
import {OvernightSleepData} from "../data/overnight-sleep-data";
import {SleepService} from "../services/sleep.service";

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonDatetime, IonDatetimeButton, IonIcon, IonLabel, IonModal, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTextarea]
})
export class SleepinessPage implements OnInit {

  public sleepinessRating: number = 0;

  public activity: string = "";

  public additionalInformation: string = "";

  constructor(private sleepService: SleepService) { }

  ngOnInit() {
  }

  protected readonly StanfordSleepinessData = StanfordSleepinessData;

  saveSleepiness()
  {
    // ToDo: have checks for invalid inputs. Also clear page after leaving.
    const sleepData = new StanfordSleepinessData(this.sleepinessRating, this.activity, this.additionalInformation);

    this.sleepService.logSleepinessData(sleepData);
    console.log("date string " + SleepService.AllSleepinessData[0].dateString());
    console.log("summary string " + SleepService.AllSleepinessData[0].summaryString());
  }
}
