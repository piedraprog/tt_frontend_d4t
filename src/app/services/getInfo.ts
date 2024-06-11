'use client';

import { ApiResponse } from "../utils/interfaces/response.interface";

const API_URL = "https://rickandmortyapi.com/api/episode/"

export const getEpisodes = async ()=> {
  try {
    const response = await fetch(`${API_URL}`);
    return await response.json();
  } catch (error:any) {
    return error
  }
}   

export const getEpisodeById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};