import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonDatetime, IonDatetimeButton,
  IonHeader, IonIcon, IonLabel, IonModal, IonSegment, IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {moon, sunny} from "ionicons/icons";
import {addIcons} from "ionicons";
import {SleepService} from "../services/sleep.service";
import {OvernightSleepData} from "../data/overnight-sleep-data";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: './overnight-sleep.page.html',
  styleUrls: ['./overnight-sleep.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, RouterLink, IonDatetime, IonCardContent, IonDatetimeButton, IonModal, IonButton, IonSegment, IonSegmentButton, IonLabel]
})
export class OvernightSleepPage implements OnInit {

  public sleepStart: string = new Date().toISOString();
  public sleepEnd: string = new Date().toISOString();
  public sleepQuality: string = "";

  constructor(private sleepService: SleepService, private router: Router, private toastController: ToastController) {
    addIcons(
      {
        moon,
        sunny,
      }
    );
  }

  ngOnInit() {
  }

  saveSleepLog()
  {
    const startDate = new Date(this.sleepStart);
    const endDate = new Date(this.sleepEnd);

    if (startDate.getTime() >= endDate.getTime())
    {
      this.sendToast("Bedtime must be before wake-up time.", 3000)
      return;
    }

    if (endDate.getTime() - startDate.getTime() > 24 * 60 * 60 * 1000)
    {
      this.sendToast("If you slept more than 24 hours you should go to the doctors!", 5000)
      return;
    }

    if (this.sleepQuality === "")
    {
      this.sendToast("You must declare how well you slept!", 3000)
      return;
    }

    const sleepData = new OvernightSleepData(startDate, endDate, this.sleepQuality);

    this.sleepService.logOvernightData(sleepData);
    console.log("date string " + SleepService.AllOvernightData[0].dateString());
    console.log("summary string " + SleepService.AllOvernightData[0].summaryString());

    this.sleepStart = new Date().toISOString();
    this.sleepEnd = new Date().toISOString();
    this.sleepQuality = "";

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
