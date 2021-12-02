export class TodoAction {
  public static readonly type = '[Todo] Add item';
  constructor(public payload: string) { }
}