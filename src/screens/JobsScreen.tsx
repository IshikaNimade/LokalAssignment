import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JobCard from '../components/JobCard';
import { Colors } from '../constants/theme';
import { styles } from '../constants/styles';
import { useJob } from '../hooks/useJob';
import { Ionicons } from '@expo/vector-icons';
import { JobData } from '../types/job';
import { JobsListNavigationProp } from '../types/navigation';

const JobsScreen = () => {
    const { jobs, loading, fetchJobs, setSelectedJob } = useJob();
    const navigation = useNavigation<JobsListNavigationProp>();

    const handleJobPress = (job: JobData) => {
        setSelectedJob(job);
        navigation.navigate('JobDetail', { job });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Jobs</Text>
            {jobs.length === 0 ? (
                <View style={styles.emptyState}>
                    <Ionicons name="search-outline" size={48} color={Colors.icon} style={{ marginBottom: 12 }} />
                    <Text style={styles.emptyText}>No Jobs Available</Text>
                </View>
            ) : (
                <FlatList
                    data={jobs.filter(item => item.id)}
                    keyExtractor={(item, index) => index.toString()}
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
        </View>
    );
};

export default JobsScreen;