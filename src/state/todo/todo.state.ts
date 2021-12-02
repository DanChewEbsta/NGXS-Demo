import { State, Action, Selector, StateContext, NgxsOnChanges, NgxsAfterBootstrap, NgxsOnInit, NgxsSimpleChange } from '@ngxs/store';
import { TodoAction } from './todo.actions';

export interface TodoStateModel {
  items: string[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
export class TodoState implements NgxsOnChanges, NgxsOnInit, NgxsAfterBootstrap   {
  
  ngxsOnChanges(change: NgxsSimpleChange<any>): void {
    console.log('1. called first and then when any state changes', change);
  }
  
  ngxsOnInit(ctx?: StateContext<any>) {
    console.log('2. called once before APP_INITIALIZER is resolved');
  }

  ngxsAfterBootstrap(ctx?: StateContext<any>): void {
    console.log('3. called once after the root view is first rendered');
  }

  @Selector()
  public static getState(state: TodoStateModel) {
    return state;
  }

  @Action(TodoAction)
  public add(ctx: StateContext<TodoStateModel>, { payload }: TodoAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
