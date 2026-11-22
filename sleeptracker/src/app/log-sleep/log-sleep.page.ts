import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons} from "ionicons";
import {moon, sunny} from "ionicons/icons";

@Component({
  selector: 'app-log-sleep',
  templateUrl: './log-sleep.page.html',
  styleUrls: ['./log-sleep.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow]
})
export class LogSleepPage implements OnInit {

  constructor() {
    addIcons(
      {
        moon,
        sunny,
      }
    );
  }

  ngOnInit() {
  }

}
