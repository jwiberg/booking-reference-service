const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/booking_reference', function (req, res) {
  let r = Math.random().toString(36).substring(7);
  res.send(r)
})
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})
