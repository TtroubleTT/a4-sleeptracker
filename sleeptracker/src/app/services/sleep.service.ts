import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Preferences } from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  private overnightData:string = "overnightData";
  private sleepinessData:string = "sleepinessData";

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
		var goToBed = new Date();
		goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
		goToBed.setHours(1, 3, 0); //1:03am
		var wakeUp = new Date();
		wakeUp.setTime(goToBed.getTime() + 8 * 60 * 60 * 1000); //Sleep for exactly eight hours, waking up at 9:03am
		this.logOvernightData(new OvernightSleepData(goToBed, wakeUp, "1")); // add that person was asleep 1am-9am yesterday
		var sleepinessDate = new Date();
		sleepinessDate.setDate(sleepinessDate.getDate() - 1); //set to yesterday
		sleepinessDate.setHours(14, 38, 0); //2:38pm
		this.logSleepinessData(new StanfordSleepinessData(4, "Studying", "Im cool",sleepinessDate)); // add sleepiness at 2pm
		goToBed = new Date();
		goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
		goToBed.setHours(23, 11, 0); //11:11pm
		wakeUp = new Date();
		wakeUp.setTime(goToBed.getTime() + 9 * 60 * 60 * 1000); //Sleep for exactly nine hours
		this.logOvernightData(new OvernightSleepData(goToBed, wakeUp, "1"));
	}

	public async logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);

    await this.saveData();
	}

	public async logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);

    await this.saveData();
	}

  public async saveData()
  {
    await Preferences.set({
      key: this.overnightData,
      value: JSON.stringify(SleepService.AllOvernightData),
    });

    await Preferences.set({
      key: this.sleepinessData,
      value: JSON.stringify(SleepService.AllSleepinessData),
    });
  }

  public async loadData() {
    const overnightResult = await Preferences.get({
      key: this.overnightData,
    });

    const sleepinessResult = await Preferences.get({
      key: this.sleepinessData,
    });

    if (overnightResult.value) {
      const data = JSON.parse(overnightResult.value);

      SleepService.AllOvernightData = data.map((item: any) => {
        const sleep = new OvernightSleepData(
          new Date(item.sleepStart),
          new Date(item.sleepEnd),
          item.sleepQuality
        );

        sleep.loggedAt = new Date(item.loggedAt);
        return sleep;
      });
    }

    if (sleepinessResult.value) {
      const data = JSON.parse(sleepinessResult.value);

      SleepService.AllSleepinessData = data.map((item: any) => {
        return new StanfordSleepinessData(
          item.loggedValue,
          item.activity,
          item.additionalInformation,
          new Date(item.loggedAt)
        );
      });
    }

    SleepService.AllSleepData = [
      ...SleepService.AllOvernightData,
      ...SleepService.AllSleepinessData
    ].sort((a, b) => a.loggedAt.getTime() - b.loggedAt.getTime());
  }
}
