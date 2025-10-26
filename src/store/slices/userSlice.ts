import type { StoreSlices } from "../Store";

type UserStore = {
  user: {
    username: string;
    email: string;
    name: string;
  };
};

type UserActions = {
  setUsername: (username: string) => void;
};

export type UserSlice = UserStore & UserActions;

export const createUserSlice: StoreSlices<UserSlice> = (set) => ({
  user: {
    username: "andreeltonsf",
    email: "frank.andreeltons@gmail.com",
    name: "Frank Andreeltons",
  },
  setUsername: (username: string) => {
    set((prevState) => {
      prevState.user.user.username = username;
    });
  },
});
