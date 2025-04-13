import { useContext } from 'react';
import { JobContext } from '../context/JobContext';

export const useJob = () => {
 const context = useContext(JobContext);
  if (!context) throw new Error('useJobContext must be used within JobProvider');
  return context;
};
