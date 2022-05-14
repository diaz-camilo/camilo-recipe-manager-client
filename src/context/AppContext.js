import axios from 'axios';
import React, { useContext, useState } from 'react'

const API_URL = process.env.REACT_APP_SERVER_API;
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {

  const currentUserTest = {
    passwordHash: "$2a$10$3PRp6XrGr4ybXSF.vpWKlu.CLLlYzryTF7C6KoOqpKxue7Gp7Egr6",
    recipes: [
      {
        id: "empanadas",
        ingredients: [
          { name: 'potato', quantity: 2, unit: 'unit' },
          { name: 'oil', quantity: 1, unit: 'lt' },
          { name: 'corn', quantity: 1, unit: 'kg' },
        ],
        steps: [
          "make dough",
          "make filling",
          "make a disc with the dough",
          "fold",
          "fry"
        ],
      },
      {
        id: "Test name",
        ingredients: [
          { name: 'chicken breast', quantity: 2, unit: 'kg' },
          { name: 'oil', quantity: 1, unit: 'tbs' },
          { name: 'salt', quantity: 1, unit: 'pinch' },
        ],
        steps: [
          'heat pan',
          'place chiken on hot pan',
          'season with salt'
        ]
      }

    ],
    email: "abc@abc.com"
  }

  const [currentUser, setCurrentUser] = useState(currentUserTest);

  const email = currentUser && currentUser.email;

  /**
   * 
   * @param {String} email 
   * @param {String} password 
   * @returns email and password hash
   */
  const signup = (email, password) => {
    return axios.post(`${API_URL}/users/new`, { email, password })
  }
  /**
   * 
   * @param {String} email 
   * @param {String} password 
   * @returns the whole user object
   */
  const login = (email, password) => {
    return axios.post(`${API_URL}/users/auth`, { email, password })
  }

  /**
   * 
   * @returns 
   */
  const logout = () => setCurrentUser(null);

  /**
   * 
   * @param {Object} recipe 
   * @returns 
   */
  const createRecipe = (recipe) => {
    return axios.post(`${API_URL}/recipes/create`, { email, recipe })
  }

  /**
   * 
   * @param {String} id 
   * @returns 
   */
  const readRecipe = (id) => {
    return axios.get(`${API_URL}/recipes/read`, { params: { email, id } })
  }

  /**
   * 
   * @returns 
   */
  const readAllRecipes = () => {
    return axios.get(`${API_URL}/recipes/read_all`, { params: { email } })
  }

  /**
   * 
   * @param {Object} recipe 
   * @returns 
   */
  const updateRecipe = (recipe) => {
    return axios.post(`${API_URL}/recipes/update`, { email, recipe })
  }

  /**
   * 
   * @param {Object} recipe 
   * @returns 
   */
  const deleteRecipe = (id) => {
    return axios.get(`${API_URL}/recipes/delete`, { params: { email, id } })
  }

  const value = {
    // functions and data to have available via context    
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    createRecipe,
    readRecipe,
    readAllRecipes,
    updateRecipe,
    deleteRecipe
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}