import axios from 'axios';
import { JobData } from '../types/job';

const API_BASE_URL = 'https://testapi.getlokalapp.com';

export const getJobs = async (retries = 3): Promise<JobData[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/common/jobs?page=1`);
    return response.data?.results || [];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (retries > 0 && error.response?.status === 503) {
        await new Promise(res => setTimeout(res, 1000)); 
        return getJobs(retries - 1);
      }
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error', error);
    }
    throw error;
  }
};