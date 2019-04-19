'use strict';

const Defacto = require('@starbase/defacto');
const Server = require('@starbase/server');
const Database = require('@starbase/database');
const Memstore = require('@starbase/memstore');
const DBService = require('@starbase/database/dbservice');
const Channels = require('@starbase/channels');
const Starfire = require('@starbase/starfire');
const Services = require('@starbase/services');
const Client = require('@starbase/client');
const theRules = require('@starbase/therules');
const Socket = require('@starbase/socket');
const Encryption = require('@starbase/encryption');
const Auth = require('@starbase/auth');
const Admin = require('@starbase/admin');
const Profiles = require('@starbase/profiles');
const Functions = require('@starbase/functions');

function Starbase() {

  let starbase = {};

  starbase.Defacto = Defacto;
  starbase.Server = Server;
  starbase.Database = Database;
  starbase.Memstore = Memstore;
  starbase.DBService = DBService;
  starbase.Channels = Channels;
  starbase.Starfire = Starfire;
  starbase.Services = Services;
  starbase.Client = Client;
  starbase.theRules = theRules;
  starbase.Socket = Socket;
  starbase.Encryption = Encryption;
  starbase.Auth = Auth;
  starbase.Admin = Admin;
  starbase.Profiles = Profiles;
  starbase.Functions = Functions;

  return starbase;

}

module.exports = Starbase;
