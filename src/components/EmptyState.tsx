import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

const EmptyState = ({ message }: { message: string }) => (
    <View style={[styles.container, { alignItems: 'center', justifyContent: 'center', flex: 1 }]}>
        <Ionicons name="information-circle-outline" size={32} color={Colors.icon} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.icon, marginTop: 8 }}>
            {message}
        </Text>
    </View>
);

export default EmptyState;
