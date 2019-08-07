const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/booking_reference', function (req, res) {
  let r = Math.random().toString(36).substring(7);
  res.send(makeid(7))
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})

function makeid(length) {
  let result           = '';
  const characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
