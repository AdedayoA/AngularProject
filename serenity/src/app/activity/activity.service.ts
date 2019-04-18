import { Subject } from 'rxjs/Subject';
import { Activity } from './activity.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable()
export class ActivityService {
    activityChanged = new Subject<Activity>();
    activitiesChanged = new Subject<Activity[]>();
    private availableActivities: Activity[] = [];
    private runningActivity: Activity;
    private activities: Activity[] = [];

constructor(private db: AngularFirestore) {}

    fetchAvailableActivities() {
        this.db.collection('availableActivities').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Activity;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        ).subscribe((activities: Activity[]) => {
            this.availableActivities = activities;
            this.activitiesChanged.next(...[this.availableActivities]);
        });
    }

    startActivity(selectedId: string) {
        this.runningActivity = this.availableActivities.find(ex => ex.id === selectedId);
        this.activityChanged.next({ ...this.runningActivity });
    }

    completeActivity() {
        this.activities.push({ ...this.runningActivity, date: new Date(), state: 'completed' });
        this.runningActivity = null;
        this.activityChanged.next(null);
    }

    cancelActivity(progress: number) {
        this.activities.push({
            ...this.runningActivity, date: new Date(), duration: this.runningActivity.duration * (progress / 100), breaths: this.runningActivity.breaths * (progress / 100),
            state: 'cancelled'
        });
        this.runningActivity = null;
        this.activityChanged.next(null);
    }

    getRunningActivity() {
        return { ...this.runningActivity };
    }

    getCompletedorCancelledActivities() {
        return this.activities.slice();
    }

}