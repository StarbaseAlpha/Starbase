#!/bin/bash
wget https://raw.githubusercontent.com/StarbaseAlpha/Database/master/database.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Database/master/memstore.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Channels/master/channels.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Channels/master/api/channels.api.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Socket/master/socket.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/TheRules/master/therules.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Encryption/master/encryption.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Auth/master/auth.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Admin/master/admin.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/Profiles/master/profiles.min.js
wget https://raw.githubusercontent.com/StarbaseAlpha/PWA/master/pwa.js
cat STARTjs database.min.js memstore.min.js channels.min.js channels.api.min.js socket.min.js therules.min.js encryption.min.js auth.min.js admin.min.js profiles.min.js pwa.js ENDjs > starbase.js
uglifyjs -c -o ../starbase.min.js starbase.js
rm starbase.js database.min.js memstore.min.js channels.min.js channels.api.min.js socket.min.js therules.min.js encryption.min.js auth.min.js admin.min.js profiles.min.js pwa.js
