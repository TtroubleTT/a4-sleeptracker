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
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

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

  constructor(private sleepService: SleepService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  protected readonly StanfordSleepinessData = StanfordSleepinessData;

  public async saveSleepiness()
  {
    if (this.sleepinessRating <= 0)
    {
      this.sendToast("Please choose a sleepiness rating!", 3000);
      return;
    }

    if (this.activity === "")
    {
      this.sendToast("Please choose an activity!", 3000);
      return;
    }

    const sleepData = new StanfordSleepinessData(this.sleepinessRating, this.activity, this.additionalInformation);

    await this.sleepService.logSleepinessData(sleepData);
    console.log("date string " + SleepService.AllSleepinessData[0].dateString());
    console.log("summary string " + SleepService.AllSleepinessData[0].summaryString());

    this.sleepinessRating = 0;
    this.activity = "";
    this.additionalInformation = "";

    this.router.navigate(['/tabs/log-sleep'])
  }

  async sendToast(message: string, duration: number)
  {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: "bottom",
      color: "danger",
    });

    await toast.present();
  }
}
