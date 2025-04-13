import React, { createContext, useEffect, useState } from 'react';
import { getJobs } from '../services/api';
import { JobContextType, JobData } from '../types/job';
import { getBookmarkedJobs, saveBookmarkedJobs } from '../utils/storage';

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [jobs, setJobs] = useState<JobData[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
    const [bookmarkedJobs, setBookmarkedJobs] = useState<JobData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const data: JobData[] = await getJobs();
            setJobs(data);
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const addBookmark = async (job: JobData) => {
        const updatedBookmarks = [...bookmarkedJobs, job];
        setBookmarkedJobs(updatedBookmarks);
        await saveBookmarkedJobs(updatedBookmarks);
    };

    const removeBookmark = async (jobId: string) => {
        const updatedBookmarks = bookmarkedJobs.filter((job) => job.id !== jobId);
        setBookmarkedJobs(updatedBookmarks);
        await saveBookmarkedJobs(updatedBookmarks);
    };

    useEffect(() => {
        const loadBookmarkedJobs = async () => {
            const storedBookmarks = await getBookmarkedJobs();
            setBookmarkedJobs(storedBookmarks);
        };

        loadBookmarkedJobs();
        fetchJobs();
    }, []);

    return (
        <JobContext.Provider value={{
            jobs, loading, selectedJob, bookmarkedJobs, setSelectedJob, fetchJobs, addBookmark,
            removeBookmark
        }}>
            {children}
        </JobContext.Provider>
    );
};
