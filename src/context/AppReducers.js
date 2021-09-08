export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.playload;
        }),
      };

    case "ADD_USER":
      return {
        users: [action.playload, ...state.users],
      };

    case "EDIT_USER":
      const updateUser = action.playload;

      console.log(updateUser);

      const updateUsers = state.users.map((user) => {
        console.log("updateUser.id: ", updateUser.id);
        if (user.id === updateUser.id) {
          //   user.name = updateUser.name;
          //   user.email = updateUser.email;
          //   user.mobileNo = updateUser.mobileNo;
          console.log("nn updateUser: ", updateUser);
          return updateUser;
        }
        return user;
      });

      console.log("updateUsers: ", updateUsers);

      return {
        users: updateUsers,
      };

    default:
      return state;
  }
};
