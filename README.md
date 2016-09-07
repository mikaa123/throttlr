# Throttlr

## installing
`npm i -S throttlr`

## What it is
Buffer and execute tasks at defined time interval.

~~~javascript
const throttlr = require('throttlr')

const t = throttlr(5000)
t(() => console.log('Executed directly'))
t(() => console.log('Will be executed in 5s'))
t(() => console.log('Will be executed in 10s'))
~~~

It can be used as simple API rate control mechanism.

~~~javascript
const request = require('request')
const throttlr = require('throttlr')
const jobs = getAllJobsToSend()

const t = throttlr(5000)
jobs.forEach(job => {
  t(() => request.post('/myUri', job))
})
~~~

In the above example, all jobs will be sent at 5s interval.

## License
MIT
