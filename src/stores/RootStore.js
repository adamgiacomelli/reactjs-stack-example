import { types } from 'mobx-state-tree';
import { ExampleStore } from './ExampleStore';

export const RootStore = types
  .model('RootStore', {
    exampleStore: types.optional(ExampleStore, {})
  })
  .actions(self => ({
    afterCreate() {}
  }));
