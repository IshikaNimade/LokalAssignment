import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/styles';

const IconButton = ({ icon, text, onPress, backgroundColor }: any) => (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Ionicons name={icon} size={18} color="#fff" style={styles.iconLeft} />
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

export default IconButton;
