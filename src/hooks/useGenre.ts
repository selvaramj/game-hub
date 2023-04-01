import React, { useState, useEffect } from 'react';
import apiClient, { CanceledError } from '../services/api-client';
import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<Genre>('/genres');

export default useGenre;
