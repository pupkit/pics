import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    header: {
      //   Authorization: 'Client-ID 6uAGSWigoH3x6Pbsd2NyGZTJI1D0udWjneCvx9I_qGM',
    },
    params: {
      query: term,
      client_id: '6uAGSWigoH3x6Pbsd2NyGZTJI1D0udWjneCvx9I_qGM',
    },
  })

  //   console.log(response)
  return response.data.results
}

export default searchImages
