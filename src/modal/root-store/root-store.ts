import {types} from 'mobx-state-tree';

export const RootStore = types
  .model({
    firstTimeLaunch: types.optional(types.boolean, true),
  })
  .actions(self => {
    return {
    };
  });
