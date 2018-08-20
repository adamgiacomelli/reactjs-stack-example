import { types } from 'mobx-state-tree';
import { fetchGithubOrgs } from '../api';

export const ExampleStore = types
  .model('ExampleStore', {
    data: types.optional(types.array(types.string), []),
    loading: types.optional(types.boolean, false),
  })
  .actions(self => ({
    async fetchGithub() {
      self.loading = true;
      const response = await fetchGithubOrgs();
      self.setData(response.data);
    },
    setData(data) {
      self.data = [];

      // Just pack everything returned into an array
      Object.keys(data).map((p) => {
        if (p && data[p]) {
          const value = JSON.stringify(data[p]);
          self.data.push(`${p} - ${value}`);
          return true;
        }
        return false;
      });
      self.loading = false;
    },
  }));
