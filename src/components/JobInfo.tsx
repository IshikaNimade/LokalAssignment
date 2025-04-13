import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/styles';
import { Colors, Typography } from '../constants/theme';

const JobInfo = ({ icon, label, value }: { icon: any, label: string, value?: string }) => (
    <View style={styles.row}>
        <Ionicons name={icon} size={18} color={Colors.icon} style={{ marginRight: 8 }} />
        <View>
            <Text style={Typography.h2}>{label}</Text>
            <Text style={Typography.p}>{value}</Text>
        </View>
    </View>
);

export default JobInfo;
