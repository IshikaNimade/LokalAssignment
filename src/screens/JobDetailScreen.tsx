import React, { useEffect, useState } from 'react';
import { View, Text, Image, Linking, ScrollView, Alert } from 'react-native';
import { styles } from '../constants/styles';
import { useJob } from '../hooks/useJob';
import { Colors } from '../constants/theme';
import JobInfo from '../components/JobInfo';
import IconButton from '../components/IconButton';
import EmptyState from '../components/EmptyState';
import { JobDetailNavigationProp } from '../types/navigation';

const JobDetailScreen: React.FC<JobDetailNavigationProp> = ({ route, navigation }) => {
    const { job } = route.params;
    const { addBookmark, removeBookmark, bookmarkedJobs } = useJob();
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    if (!route?.params?.job) {
        return <EmptyState message="No job selected" />;
    }

    useEffect(() => {
        if (job) {
            setIsBookmarked(bookmarkedJobs.some((jobs) => jobs.id === job.id));
        }
    }, [job, bookmarkedJobs]);

    const handleBookmark = () => {
        if (job) {
            if (isBookmarked) {
                removeBookmark(job.id);
                Alert.alert('Removed', 'Job has been removed from bookmarks');
            } else {
                addBookmark(job);
                Alert.alert('Bookmarked', 'Job has been added to bookmarks');
            }
        }
    };

    if (!job) return <EmptyState message="No job selected" />;

    const {
        title,
        company_name,
        job_role,
        job_hours,
        whatsapp_no,
        primary_details,
        contact_preference,
        creatives,
    } = job;

    const preferredCallTime = contact_preference
        ? `${contact_preference.preferred_call_start_time} - ${contact_preference.preferred_call_end_time}`
        : 'Anytime';

    const handleWhatsApp = () => {
        const url = contact_preference?.whatsapp_link;
        if (url) Linking.openURL(url);
    };

    const handleCall = () => {
        const phoneNumber = whatsapp_no;
        if (phoneNumber) Linking.openURL(`tel:${phoneNumber}`);
    };

    const imageUrl = creatives?.[0]?.file;

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>Job Detail</Text>

                <View style={styles.box}>
                    <Text style={styles.boxHeader}>Company Name: {company_name}</Text>

                    {imageUrl && (
                        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
                    )}

                    <View style={{ gap: 16 }}>
                        <JobInfo icon="briefcase-outline" label="Title" value={title} />
                        <JobInfo icon="location-outline" label="Location" value={primary_details?.Place} />
                        <JobInfo icon="cash-outline" label="Salary" value={primary_details?.Salary} />
                        <JobInfo icon="hourglass-outline" label="Experience" value={primary_details?.Experience || 'Not specified'} />
                        <JobInfo icon="school-outline" label="Qualification" value={primary_details?.Qualification || 'Not specified'} />
                        <JobInfo icon="person-outline" label="Job Role" value={job_role || 'N/A'} />
                        <JobInfo icon="time-outline" label="Working Hours" value={job_hours || 'Not mentioned'} />
                        <JobInfo icon="alarm-outline" label="Preferred Call Time" value={preferredCallTime} />
                    </View>

                    <View style={styles.buttonRow}>
                        <IconButton
                            icon="logo-whatsapp"
                            text="WhatsApp"
                            backgroundColor={Colors.whatsapp}
                            onPress={handleWhatsApp}
                        />
                        <IconButton
                            icon="call-outline"
                            text="Call HR"
                            backgroundColor={Colors.call}
                            onPress={handleCall}
                        />
                    </View>

                    <View style={styles.bookmarkBtnContainer}>
                        <IconButton
                            icon={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                            text={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                            backgroundColor={Colors.icon}
                            onPress={handleBookmark}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default JobDetailScreen;
