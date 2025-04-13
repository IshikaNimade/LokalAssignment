import { StyleSheet } from 'react-native';
import { Colors, Typography } from './theme';

export const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    box:{
        padding: 20,
    },
    boxHeader:{
        ...Typography.h1,
        alignSelf:'center',
        color: Colors.icon,
    },
    header: {
        ...Typography.h1,
        padding: 16,
        color: Colors.icon,
        backgroundColor: Colors.primary,
    },
    card: {
        backgroundColor: Colors.cardBackground,
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 2,
        gap: 8
    },
    label: {
    fontWeight: 'bold',
    fontSize: 16,
    gap: 2
},
text: {
    fontSize: 16,
    color: '#333',
},
iconLeft: {
  marginRight: 8,
},
button: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 12,
  borderRadius: 8,
},
buttonText: {
  color: '#fff',
  fontWeight: '600',
},
image:{
    width: '100%',
    height: 300,
    borderRadius: 12,                     
}, 
buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 24,
  gap: 2,
},
bookmarkBtnContainer: {
  marginTop: 16,
},
emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
},

emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.icon,
    textAlign: 'center',
},
tabBar: {
        backgroundColor: Colors.primary,
        padding: 10,
        height: 70,
    },
    tabBarLabel: {
        color: Colors.icon,
        fontSize: 14,
        fontWeight: '600',
    },
});