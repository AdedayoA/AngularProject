import { Subject } from 'rxjs/Subject';
import { Activity } from './activity.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {Subscription } from 'rxjs';


@Injectable()
export class ActivityService {
    activityChanged = new Subject<Activity>();
    activitiesChanged = new Subject<Activity[]>();
    finishedActivitiesChanged = new Subject<Activity[]>();
    private availableActivities: Activity[] = [];
    private runningActivity: Activity;
    private fbSubs: Subscription[] = [];

constructor(private db: AngularFirestore) {}

    fetchAvailableActivities() {
        this.fbSubs.push(this.db.collection('availableActivities').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Activity;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        ).subscribe((activities: Activity[]) => {
            this.availableActivities = activities;
            this.activitiesChanged.next(...[this.availableActivities]);
        }));
    }

    startActivity(selectedId: string) {
        //this.db.doc('availableActivities/' + selectedId).update({lastSelected: new Date()})
        this.runningActivity = this.availableActivities.find(ex => ex.id === selectedId);
        this.activityChanged.next({ ...this.runningActivity });
    }

    completeActivity() {
        this.addDataToDatabase({ ...this.runningActivity, date: new Date(), state: 'completed' });
        this.runningActivity = null;
        this.activityChanged.next(null);
    }

    cancelActivity(progress: number) {
        this.addDataToDatabase({
            ...this.runningActivity, date: new Date(), duration: this.runningActivity.duration * (progress / 100), breaths: this.runningActivity.breaths * (progress / 100),
            state: 'cancelled'
        });
        this.runningActivity = null;
        this.activityChanged.next(null);
    }

    getRunningActivity() {
        return { ...this.runningActivity };
    }

    fetchCompletedorCancelledActivities() {
        this.fbSubs.push(this.db.collection('finishedActivities').valueChanges().subscribe((activities: Activity[]) =>{
            this.finishedActivitiesChanged.next(activities);
        }));
    }

    cancelSubscription(){
    this.fbSubs.forEach(sub => sub.unsubscribe());
    }
    private addDataToDatabase(activity: Activity){
        this.db.collection('finishedActivities').add(activity);
    }

}