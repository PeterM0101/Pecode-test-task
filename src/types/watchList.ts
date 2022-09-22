export interface WatchListSchema {
  title: string;
  watched: boolean;
  id: string;
}

export interface ToggleWatchedAction {
  id: string;
  watched: boolean;
}
