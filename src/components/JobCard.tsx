import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/styles';
import { useJob } from '../hooks/useJob';
import { JobData } from '../types/job';

const JobCard = ({ job }: { job: JobData }) => {

    const { id, title, primary_details, whatsapp_no, contact_preference } = job;
    const { addBookmark, removeBookmark, bookmarkedJobs } = useJob();

    const isBookmarked = bookmarkedJobs.some((b: any) => b.id === id);

    const preferredCallTime = contact_preference?.preferred_call_start_time && contact_preference?.preferred_call_end_time
        ? `${contact_preference.preferred_call_start_time} - ${contact_preference.preferred_call_end_time}`
        : '';

    const toggleBookmark = async () => {
        if (isBookmarked) {
            await removeBookmark(id);
        } else {
            await addBookmark(job);
        }
    };
    return (
        <View style={styles.card}>
            <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text
                    style={[Typography.h2, { flex: 1, marginRight: 10 }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {title}
                </Text>
                <TouchableOpacity onPress={toggleBookmark}>
                    <Ionicons
                        name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                        size={22}
                        color={Colors.icon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <Ionicons name="location-outline" size={16} color={Colors.icon} />
                <Text style={Typography.p}>{primary_details?.Place || 'N/A'}</Text>
            </View>

            <View style={styles.row}>
                <Ionicons name="cash-outline" size={16} color={Colors.icon} />
                <Text style={Typography.p}>{primary_details?.Salary || 'N/A'}</Text>
            </View>

            <View style={styles.row}>
                <Ionicons name="call-outline" size={16} color={Colors.icon} />
                <Text style={Typography.p}>{whatsapp_no || 'N/A'}</Text>
            </View>

            {preferredCallTime && (
                <View style={styles.row}>
                    <Ionicons name="time-outline" size={16} color={Colors.icon} />
                    <Text style={Typography.p}>{preferredCallTime}</Text>
                </View>
            )}
        </View>
    )
};

export default JobCard;
