export interface Exercise {
    id: string;
    name: string;
    duration: number;
    breaths: number;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;
}