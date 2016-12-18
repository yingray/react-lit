import 'isomorphic-fetch'

const checkStatus = response => {
	if (response.status < 300 || response.ok || response.statusText === 'OK') {
		return response
	} else {
		throw response
	}
}

const createQuery = (method, body) => {
	const query = {
		"method": method,
		"headers": {
			"Accept": "application/json",
			"Content-type": "application/json;charset=UTF-8",
            "UserToken": ""
		},
		"credentials": "include"
	}
	if(body) query.body = JSON.stringify(body)
	return query
}

const handleError = error => {
	console.log('FetchCreator Catches Error!')
	console.log(error)
	throw error
}

export const createFetch = (param, responseMixin) => (
	fetch(param.url, createQuery(param.method, param.body))
		.then(checkStatus)
		.then(response => responseMixin ? response[responseMixin]() : response)
		.catch(handleError)
)