/*
*
*/
const SMTPServer = require("smtp-server").SMTPServer;
//
const server = new SMTPServer({
    onAuth(auth, session, callback) {
        console.log('....dentro de onAuth:: auth: ',auth,' session: ',session) ;
        return callback(null, {
            user: 'userdata' // value could be an user id, or an user object etc. This value can be accessed from session.user afterwards
        });
    },
    onData(stream, session, callback) {
        console.log('.....dentro de onData: stream: ') ;
        stream.pipe(process.stdout);
        callback() ;
    }
});
//
console.log('...server.listen: ',server.listen) ;
//
server.on("error", err => {
    console.log("Error %s", err.message);
  }) ;
server.listen( 4025 );
//