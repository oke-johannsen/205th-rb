import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

if (Meteor.isServer) {
  Meteor.methods({
    createNewUser: function (options) {
      Accounts.createUser(options);
    },
  });
}

Meteor.startup(async () => {});
