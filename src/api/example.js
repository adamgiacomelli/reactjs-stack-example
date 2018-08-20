import axios from 'axios';
import { API_URL } from '../constants/api';

export const fetchGithubOrgs = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_URL}/users/octocat/orgs`,
      responseType: 'json',
    });
    return response.data.data;
  } catch (err) {
    throw err.response.data;
  }
};
