import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonList, IonLabel, IonItem
} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { addIcons} from "ionicons";
import {moon, sunny } from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonList, IonLabel, IonItem],
})
export class HomePage {
  constructor(public sleepService:SleepService) {
    addIcons(
      {
        moon,
        sunny,
      }
    );
	}

	async ngOnInit() {
		console.log(this.allSleepData);
    await this.sleepService.loadData();
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

  get latestOvernightSleep(): OvernightSleepData | undefined
  {
    const data = SleepService.AllOvernightData;
    if (data.length === 0)
    {
      return undefined;
    }

    return data[data.length - 1];
  }

  protected readonly SleepService = SleepService;
}
