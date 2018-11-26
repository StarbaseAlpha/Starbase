'use strict';

const Defacto = require('@starbase/defacto');
const Database = require('@starbase/database');
const memstore = require('@starbase/database/memstore');
const DBService = require('@starbase/database/server/dbservice');
const Channels = require('@starbase/channels');
const ChannelsAPI = require('@starbase/channels/api');
const theRules = require('@starbase/therules');
const Socket = require('@starbase/socket');
const Encryption = require('@starbase/encryption');
const Auth = require('@starbase/auth');

function Starbase() {

  let starbase = {};

  starbase.Defacto = Defacto;
  starbase.Database = Database;
  starbase.memstore = memstore;
  starbase.Channels = Channels;
  starbase.ChannelsAPI = ChannelsAPI;
  starbase.theRules = theRules;
  starbase.Socket = Socket;
  starbase.DBService = DBService;
  starbase.Auth = Auth;

  return starbase;

}

module.exports = Starbase;
