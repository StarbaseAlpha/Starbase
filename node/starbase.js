'use strict';

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
const Topics = require('@starbase/topics');
const Push = require('@starbase/push');
const Realtime = require('@starbase/realtime');
const Pages = require('@starbase/pages');

function Starbase() {

  let starbase = {};

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
  starbase.Topics = Topics;
  starbase.Push = Push;
  starbase.Realtime = Realtime;
  starbase.Pages = Pages;

  return starbase;

}

module.exports = Starbase;
