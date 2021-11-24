#!/bin/bash
REPOS_SRC="https://raw.githubusercontent.com/StarbaseAlpha/"
wget $REPOS_SRC\Database/master/database.min.js $REPOS_SRC\Memstore/master/memstore.min.js $REPOS_SRC\PWA/master/pwa.min.js
wget $REPOS_SRC\Channels/master/channels.min.js $REPOS_SRC\Client/master/client.min.js $REPOS_SRC\Services/master/services.min.js
wget $REPOS_SRC\Socket/master/socket.min.js $REPOS_SRC\TheRules/master/therules.min.js $REPOS_SRC\Auth/master/auth.min.js
wget $REPOS_SRC\Admin/master/admin.min.js wget $REPOS_SRC\Profiles/master/profiles.min.js wget $REPOS_SRC\Encryption/master/encryption.min.js
wget $REPOS_SRC\Cryptic/master/cryptic.min.js $REPOS_SRC\CryptoDB/master/cryptodb.min.js $REPOS_SRC\Topics/master/topics.min.js
wget $REPOS_SRC\Push/master/push.min.js $REPOS_SRC\Files/master/files.min.js
wget $REPOS_SRC\WEBRTC/master/webrtc.min.js $REPOS_SRC\Realtime/master/realtime.min.js $REPOS_SRC\Triples/master/triples.min.js
cat STARTjs database.min.js memstore.min.js channels.min.js client.min.js socket.min.js therules.min.js auth.min.js admin.min.js profiles.min.js pwa.min.js cryptic.min.js cryptodb.min.js encryption.min.js services.min.js topics.min.js push.min.js files.min.js webrtc.min.js realtime.min.js triples.min.js ENDjs > starbase.js
uglifyjs -c --webkit -o ../starbase.min.js starbase.js
rm starbase.js database.min.js memstore.min.js channels.min.js client.min.js socket.min.js therules.min.js auth.min.js admin.min.js profiles.min.js pwa.min.js cryptic.min.js cryptodb.min.js encryption.min.js services.min.js topics.min.js push.min.js files.min.js webrtc.min.js realtime.min.js triples.min.js
