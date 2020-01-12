'use strict';

const Server = require('@starbase/server');
const Database = require('@starbase/database');
const Memstore = require('@starbase/memstore');
const Channels = require('@starbase/channels');
const Starfire = require('@starbase/starfire');
const Client = require('@starbase/client');
const theRules = require('@starbase/therules');
const Socket = require('@starbase/socket');
const Auth = require('@starbase/auth');
const Admin = require('@starbase/admin');
const Profiles = require('@starbase/profiles');
const Cryptic = require('@starbase/cryptic');
const CryptoDB = require('@starbase/cryptodb');
const Encryption = require('@starbase/encryption');

function Starbase() {

  let starbase = {};

  starbase.Server = Server;
  starbase.Database = Database;
  starbase.Memstore = Memstore;
  starbase.Channels = Channels;
  starbase.Starfire = Starfire;
  starbase.Client = Client;
  starbase.theRules = theRules;
  starbase.Socket = Socket;
  starbase.Auth = Auth;
  starbase.Admin = Admin;
  starbase.Profiles = Profiles;
  starbase.Cryptic = Cryptic;
  starbase.CryptoDB = CryptoDB;
  starbase.Encryption = Encryption;

  return starbase;

}

module.exports = Starbase;
