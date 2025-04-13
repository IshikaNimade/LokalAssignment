import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../constants/styles';
import { useJob } from '../hooks/useJob';
import JobCard from '../components/JobCard';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { JobData } from '../types/job';
import { BookmarkListNavigationProp } from '../types/navigation';

const BookmarksScreen = () => {
    const { loading, bookmarkedJobs, setSelectedJob, fetchJobs } = useJob();
    const navigation = useNavigation<BookmarkListNavigationProp>();

    const handleJobPress = (job: JobData) => {
        setSelectedJob(job);
        navigation.navigate('JobDetail', { job });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bookmarks</Text>
            {bookmarkedJobs.length === 0 ? (
                <View style={styles.emptyState}>
                    <Ionicons name="bookmark-outline" size={48} color={Colors.icon} style={{ marginBottom: 12 }} />
                    <Text style={styles.emptyText}>No Bookmarked Jobs</Text>
                </View>
            ) : (
                <FlatList
                    data={bookmarkedJobs}
                    keyExtractor={(item => item.id)}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleJobPress(item)}>
                            <JobCard job={item} />
                        </TouchableOpacity>
                    )}
                    onEndReached={fetchJobs}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loading ? <ActivityIndicator color={Colors.icon} /> : null}
                    contentContainerStyle={{ padding: 16 }}
                />
            )}
        </View >
    );
};

export default BookmarksScreen;
