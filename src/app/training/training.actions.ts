import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_EXERCISES =
  '[Training] Set Available Exercises';
export const SET_FINISHED_EXERCISES = '[Auth] Set Finished Exercises';
export const SET_ACTIVE_EXERCISE = '[Training] Set Active Exercise';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvailableExercises implements Action {
  readonly type = SET_AVAILABLE_EXERCISES;

  constructor(public payload: Exercise[]) {}
}

export class SetFinishedExercises implements Action {
  readonly type = SET_FINISHED_EXERCISES;

  constructor(public payload: Exercise[]) {}
}

export class SetActiveExercise implements Action {
  readonly type = SET_ACTIVE_EXERCISE;

  constructor(public payload: string) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  | SetAvailableExercises
  | SetFinishedExercises
  | SetActiveExercise
  | StopTraining;
