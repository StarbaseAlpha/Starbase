'use strict';

const Defacto = require('@starbase/defacto');
const Server = require('@starbase/server');
const Database = require('@starbase/database');
const memstore = require('@starbase/database/memstore');
const DBService = require('@starbase/database/dbservice');
const Channels = require('@starbase/channels');
const Starfire = require('@starbase/starfire');
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
  starbase.Server = Server;
  starbase.Database = Database;
  starbase.memstore = memstore;
  starbase.DBService = DBService;
  starbase.Channels = Channels;
  starbase.Starfire = Starfire;
  starbase.Client = Client;
  starbase.theRules = theRules;
  starbase.Socket = Socket;
  starbase.Encryption = Encryption;
  starbase.Auth = Auth;
  starbase.Admin = Admin;
  starbase.Profiles = Profiles;

  return starbase;

}

module.exports = Starbase;
