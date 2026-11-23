import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;
  private sleepQuality: string;

	constructor(sleepStart:Date, sleepEnd:Date, sleepQuality: string) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
    this.sleepQuality = sleepQuality;
	}

	override summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes";
	}

  override nameString(): string {
    return "Overnight Sleep";
  }

  override additionalProperties(): string {
    return "Bedtime: " + this.startTimeString() + " - Wake-up: " + this.endTimeString() + "\nSleep Quality: " + this.sleepQuality + "/5";
  }

  startTimeString(): string
  {
    return this.sleepStart.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  endTimeString(): string
  {
    return this.sleepEnd.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  }
}
