const axios = require('axios')

export const punkApiPagination = pageNumber =>
	axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=15`)

export const punkApiSingle = id => axios.get(`https://api.punkapi.com/v2/beers/${id}`)
