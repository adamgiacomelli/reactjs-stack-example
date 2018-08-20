import { types } from 'mobx-state-tree';
import {
  fetchGithubOrgs,
} from '../api';

export const ExampleStore = types
  .model('ExampleStore', {
    loading: types.optional(types.boolean, false),
  })
  .views(self => ({}
  ))
  .actions(self => ({
    async fetchGithub() {
      self.loading = true;
      const response = await fetchGithubOrgs();
      console.log(response)
    },
  }));
