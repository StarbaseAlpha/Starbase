#!/bin/bash
REPOS_SRC="https://raw.githubusercontent.com/StarbaseAlpha/"
wget $REPOS_SRC\Database/master/database.min.js $REPOS_SRC\Database/master/memstore.min.js $REPOS_SRC\Channels/master/channels.min.js wget $REPOS_SRC\Client/master/client.min.js
wget $REPOS_SRC\Socket/master/socket.min.js $REPOS_SRC\TheRules/master/therules.min.js $REPOS_SRC\Encryption/master/encryption.min.js $REPOS_SRC\Auth/master/auth.min.js
wget $REPOS_SRC\Admin/master/admin.min.js $REPOS_SRC\Profiles/master/profiles.min.js $REPOS_SRC\PWA/master/pwa.min.js $REPOS_SRC\Services/master/services.min.js
cat STARTjs database.min.js memstore.min.js channels.min.js client.min.js socket.min.js therules.min.js encryption.min.js auth.min.js admin.min.js profiles.min.js pwa.min.js services.min.js ENDjs > starbase.js
uglifyjs -c -o ../starbase.min.js starbase.js
rm starbase.js database.min.js memstore.min.js channels.min.js client.min.js socket.min.js therules.min.js encryption.min.js auth.min.js admin.min.js profiles.min.js pwa.min.js services.min.js
