import { types } from 'mobx-state-tree';
import {
  fetchGithubOrgs,
} from '../api';

export const ExampleStore = types
  .model('ExampleStore', {
    data: types.optional(types.array(types.string), []),
    loading: types.optional(types.boolean, false),
  })
  .views(self => ({}
  ))
  .actions(self => ({
    async fetchGithub() {
      self.loading = true;
      const response = await fetchGithubOrgs();
      self.setData(response.data);
    },
    setData(data) {
      self.data = [];
      for (var p in data) {        
        self.data.push(`${p} - ${data[p]}`);
      }
      self.loading = false;
    }
  }));  