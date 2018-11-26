#!/bin/bash

wget https://cdn.jsdelivr.net/npm/@starbase/database/database.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/database/memstore.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/channels/channels.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/channels/api/channels.api.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/socket/socket.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/therules/therules.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/encryption/encryption.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/auth/auth.min.js
wget https://cdn.jsdelivr.net/npm/@starbase/profiles/profiles.min.js

cat STARTjs database.min.js memstore.min.js channels.min.js channels.api.min.js socket.min.js therules.min.js encryption.min.js auth.min.js profiles.min.js ENDjs > starbase.js

uglifyjs -c -o ../starbase.min.js starbase.js
rm starbase.js
rm database.min.js
rm memstore.min.js
rm channels.min.js
rm channels.api.min.js
rm socket.min.js
rm therules.min.js
rm encryption.min.js
rm auth.min.js
rm profiles.min.js
