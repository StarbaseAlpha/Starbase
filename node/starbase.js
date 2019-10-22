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
const Cryptic = require('@starbase/cryptic');
const CryptoDB = require('@starbase/cryptodb');

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
  starbase.Cryptic = Cryptic;
  starbase.CryptoDB = CryptoDB;

  return starbase;

}

module.exports = Starbase;
