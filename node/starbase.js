'use strict';

const Defacto = require('@starbase/defacto');
const Database = require('@starbase/database');
const memstore = require('@starbase/database/memstore');
const DBService = require('@starbase/database/dbservice');
const Channels = require('@starbase/channels');
const Client = require('@starbase/client');
const theRules = require('@starbase/therules');
const Socket = require('@starbase/socket');
const Encryption = require('@starbase/encryption');
const Auth = require('@starbase/auth');
const Admin = require('@starbase/admin');
const Profiles = require('@starbase/profiles');

function Starbase() {

  let starbase = {};

  starbase.Defacto = Defacto;
  starbase.Database = Database;
  starbase.memstore = memstore;
  starbase.Channels = Channels;
  starbase.Client = Client;
  starbase.theRules = theRules;
  starbase.Socket = Socket;
  starbase.DBService = DBService;
  starbase.Auth = Auth;
  starbase.Admin = Admin;
  starbase.Profiles = Profiles;

  return starbase;

}

module.exports = Starbase;
