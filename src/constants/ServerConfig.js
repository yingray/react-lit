const mode =  process.env.REACT_APP_MODE

const config = {
	url: {
		account: {
			dev: 'http://52.203.11.93:9093',
			stg: 'http://ec2-54-242-244-158.compute-1.amazonaws.com:7072',
			prod: 'http://ec2-54-242-244-158.compute-1.amazonaws.com:7072'
		},
        management: {
			dev: 'http://52.203.11.93:9095',
			stg: 'https://id-test.fuhu.org/oauth2',
			prod: 'https://userid.nabitablet.com/oauth2'
		}
	},
	key: {
		account: {
			dev: 'e4289e2c-c9a7-4600-b530-f75207ead757',
			stg: 'e4289e2c-c9a7-4600-b530-f75207ead757',
			prod: 'e4289e2c-c9a7-4600-b530-f75207ead757'
		},
		recaptcha: {
			dev: '6LeRSiQTAAAAAHjf2kAWmTUj3uusXJ7PULGs_3Jd',
			stg: '6LeRSiQTAAAAAHjf2kAWmTUj3uusXJ7PULGs_3Jd',
			prod: '6LeRSiQTAAAAAHjf2kAWmTUj3uusXJ7PULGs_3Jd'
		}
	}
}

export const host = {
	url: {
		account: config.url.account[mode],
        management: config.url.management[mode]
	},
	key: {
		account: config.key.account[mode],
		recaptcha: config.key.recaptcha[mode]
	}
}



