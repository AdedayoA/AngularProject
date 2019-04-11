import { Subject } from 'rxjs/Subject';
import { Exercise } from './exercise.model';

export class ActivityService{
    exerciseChanged  = new Subject<Exercise>();
    private availableExercises: Exercise[] = [
        { id: 'quick-relaxation', name: 'Quick Relaxation', duration: 60, breaths: 16 },
        { id: 'relaxation', name: 'Relaxation For 5 Minutes', duration: 300, breaths: 80 },
        { id: 'quick-meditation', name: 'Quick Meditation', duration: 60, breaths: 16 },
        { id: 'meditation-5', name: 'Meditation For 5 Minutes', duration: 300, breaths: 80 },
        { id: 'meditation-10', name: 'Meditation For 10 Minutes', duration: 300, breaths: 160 },
        { id: 'meditation-15', name: 'Meditation For 15 Minutes', duration: 300, breaths: 240 },
        { id: 'meditation-30', name: 'Meditation For 30 Minutes', duration: 300, breaths: 320 },
    ];

    private runningExercise: Exercise;

    getAvailableActivities() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: String){
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise });
    }
}