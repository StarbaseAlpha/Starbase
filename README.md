# Starbase
All Starbase Libraries

This project provides the main Starbase Libaries for Node.js and the Web in a single package. Please refer to the [Starbase Alpha Manual](https://github.com/StarbaseAlpha/Manual) for links to documentation for using each of the Starbase Libraries.

## Adding Starbase to your Project


### On the Web
```HTML
<script src="/path/to/starbase.min.js"></script>
```

### On the Web via jsdelivr CDN
```HTML
<script src="https://cdn.jsdelivr.net/npm/@starbase/starbase/starbase.min.js"></script>
```

### In NodeJS
```bash
npm install @starbase/starbase
```

## Using Starbase


### on the Web using starbase.min.js:
```javascript
var starbase = Starbase();

var Database = starbase.Database;
var Memstore = starbase.Memstore;
var Channels = starbase.Channels;
var Client = starbase.Client;
var theRules = starbase.theRules;
var Socket = starbase.Socket;
var Auth = starbase.Auth;
var Admin = starbase.Admin;
var Profiles = starbase.Profiles;
```

### in Node.js using @starbase/starbase:
```javascript
var Starbase = require('@starbase/starbase');
var starbase = Starbase();

var Defacto = starbase.Defacto;
var Server = starbase.Server;
var Database = starbase.Database;
var Memstore = starbase.Memstore;
var DBService = starbase.DBService;
var Channels = starbase.Channels;
var Starfire = starbase.Starfire;
var Client = starbase.Client;
var theRules = starbase.theRules;
var Socket = starbase.Socket;
var Auth = starbase.Auth;
var Admin = starbase.Admin;
var Profiles = starbase.Profiles;
```

## More Information

### Manuals

- [Starbase Alpha Software Manual](https://github.com/StarbaseAlpha/Manual)
- [Starbase Libraries Manual](https://github.com/StarbaseAlpha/Starbase)
- [Starbase Database Manual](https://github.com/StarbaseAlpha/Database)
- [Starbase Memstore Manual](https://github.com/StarbaseAlpha/Memstore)
- [Starbase Channels Manual](https://github.com/StarbaseAlpha/Channels)
- [Starbase Channels Server Manual](https://github.com/StarbaseAlpha/Server)
- [Starbase Channels Client Manual](https://github.com/StarbaseAlpha/Client)
- [Starbase Socket Manual](https://github.com/StarbaseAlpha/Socket)
- [Starbase Rules Engine Manual](https://github.com/StarbaseAlpha/TheRules)
- [Starbase Defacto Web Server Manual](https://github.com/StarbaseAlpha/Defacto)
- [Starbase Authentication Manual](https://github.com/StarbaseAlpha/Auth)
- [Starbase Database Admin Manual](https://github.com/StarbaseAlpha/Admin)
- [Starbase User Profiles Manual](https://github.com/StarbaseAlpha/Profiles)
- [Starbase Starfire Manual](https://github.com/StarbaseAlpha/Starfire)


### Author
Hi, my name is Mike. Thanks for taking an interest in my work.
