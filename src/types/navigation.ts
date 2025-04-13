import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { JobData } from '../types/job';

export type JobsStackParamList = {
  JobsList: undefined;
  JobDetail: { job: JobData };
};

export type BookmarksStackParamList = {
  BookmarkList: undefined;
  JobDetail: { job: JobData };
};

export type RootStackParamList = {
  HomeTabs: undefined;
  JobDetail: { job: JobData };
};

export type JobsListNavigationProp = NativeStackNavigationProp<JobsStackParamList, 'JobsList'>;
export type BookmarkListNavigationProp = NativeStackNavigationProp<BookmarksStackParamList, 'BookmarkList'>;
export type JobDetailNavigationProp = NativeStackScreenProps<RootStackParamList, 'JobDetail'>;
