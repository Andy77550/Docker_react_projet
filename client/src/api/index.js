import axios from 'axios'

//Create api

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

// Ajouter un film

export const insertMovie = payload => api.post(`/movie`, payload)

// Récupération de tous les films ajoutés et modifiés

export const getAllMovies = () => api.get(`/movies`)

// Modifier un film ajouté par son id

export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)

// Supprimer un film ajouté par son id

export const deleteMovieById = id => api.delete(`/movie/${id}`)

// Récupération d'un film ajoutés et modifié par son id


export const getMovieById = id => api.get(`/movie/${id}`)

//Récupération de toute les constantes

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis