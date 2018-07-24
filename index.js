const Twit = require("twit") // https://github.com/ttezel/twit
require("dotenv").config() // https://www.npmjs.com/package/dotenv
console.log("PiCam bot init")

const T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
})

const tweet = {
	status: "hola este es un bot en nodejs"
}

T.post("statuses/update", tweet, callback)

function callback(err, data, response) {
	if (err) {
		console.log("Error:", err.message)
	} else {
		console.log("Post success")
	}
}
