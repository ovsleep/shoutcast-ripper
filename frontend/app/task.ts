import { Recording } from './recording';

export class Task {
  _id: string;
  name: string;
  days: [string];
  startHour: number;
  duration: number;
  url: number;
  recordings: [Recording];

  public newRecordings(): number {
    let newRecordings = this.recordings.filter(r => { return r.newRecording == true });
    return newRecordings.length;
  }
}