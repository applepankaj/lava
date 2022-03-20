const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('<meta http-equiv="refresh" content="0; URL=https://itznexus.gitbook.io/itznexus/support"/>'))

app.listen(port, () =>
console.log(`Creator: ItzNexus & Milrato Developments`)
);