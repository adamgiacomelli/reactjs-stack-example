import axios from 'axios';
import { API_URL } from '../constants/api';

export const fetchGithubOrgs = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_URL}/repos/adamgiacomelli/reactjs-stack-example`,
      responseType: 'json'
    });
    return response;
  } catch (err) {
    throw err.response;
  }
};
