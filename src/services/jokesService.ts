import axios from 'axios'

interface jokeType {
  id?: number
  title?: string
  body?: string
  author?: string
  views?: number | number
  createdAt?: number | string
}

const BASE_URL = 'https://example-api.com/zu9TVE'

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

// GET all jokes
const getAllJokes = () => axiosInstance.get('/jokes')

// GET jokes with filter
const getFilteredJokes = (params: jokeType) =>
  axiosInstance.get(`/jokes`, { params: params })

// GET joke by ID
const getJokeById = (id: number) => axiosInstance.get(`/jokes/${id}`)

// GET paginated jokes
const getPaginatedJokes = (page: number | string, limit: number | string) =>
  axiosInstance.get(`/jokes/?_page=${page}&_limit=${limit}`)

// POST a new joke
const createJoke = (jokeData: jokeType) =>
  axiosInstance.post('/jokes', jokeData)

// PUT (update) an existing joke by ID
const updateJoke = (id: number | string, jokeData: jokeType) =>
  axiosInstance.put(`/jokes/${id}`, jokeData)

// PATCH (partially update) an existing joke by ID
const patchJoke = (id: number | string, jokeData: jokeType) =>
  axiosInstance.patch(`/jokes/${id}`, jokeData)

// DELETE a joke by ID
const deleteJoke = (id: number | string) => axiosInstance.delete(`/jokes/${id}`)

// Export all functions
export {
  getAllJokes,
  getFilteredJokes,
  getJokeById,
  getPaginatedJokes,
  createJoke,
  updateJoke,
  patchJoke,
  deleteJoke
}
