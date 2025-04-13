import AsyncStorage from '@react-native-async-storage/async-storage';
import { JobData } from '../types/job';

const BOOKMARKED_JOBS_KEY = 'bookmarkedJobs';

export const getBookmarkedJobs = async (): Promise<JobData[]> => {
    try {
        const storedBookmarks = await AsyncStorage.getItem(BOOKMARKED_JOBS_KEY);
        return storedBookmarks ? JSON.parse(storedBookmarks) : [];
    } catch (error) {
        console.error('Error fetching bookmarked jobs from AsyncStorage', error);
        return [];
    }
};

export const saveBookmarkedJobs = async (bookmarkedJobs: JobData[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(BOOKMARKED_JOBS_KEY, JSON.stringify(bookmarkedJobs));
    } catch (error) {
        console.error('Error saving bookmarked jobs to AsyncStorage', error);
    }
};

export const toggleBookmarkJob = async (job: JobData, isAdding: boolean): Promise<void> => {
    try {
        const currentBookmarks = await getBookmarkedJobs();

        let updatedBookmarks = [];
        if (isAdding) {
            updatedBookmarks = [...currentBookmarks, job];
        } else {
            updatedBookmarks = currentBookmarks.filter((item) => item.id !== job.id);
        }

        await saveBookmarkedJobs(updatedBookmarks);
    } catch (error) {
        console.error('Error toggling bookmark job', error);
    }
};
