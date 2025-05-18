import {AppRegistry} from 'react-native';
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('UniversityEventApp', () => App);
const UniversityEventApp = () => {
  // Event data
  const eventData = {
    Monday: [
      {id: '1', name: 'Coding Workshop', time: '10:00 AM', location: 'CS Lab'},
      {id: '2', name: 'Faculty Meeting', time: '2:00 PM', location: 'Room 302'},
    ],
    Tuesday: [
      {id: '3', name: 'Sports Day', time: '9:00 AM', location: 'Main Ground'},
    ],
    // Add other days...
  };

  const [selectedDay, setSelectedDay] = useState('Monday');
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <View style={styles.container}>
      {/* Day selector */}
      <View style={styles.daySelector}>
        {daysOfWeek.map(day => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDay === day && styles.selectedDayButton,
            ]}
            onPress={() => setSelectedDay(day)}>
            <Text style={selectedDay === day && styles.selectedDayText}>
              {day.slice(0, 3)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Events list */}
      <FlatList
        data={eventData[selectedDay]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text>⏰ {item.time}</Text>
            <Text>📍 {item.location}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noEvents}>No events today</Text>
        }
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#f5f5f5'},
  daySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dayButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  selectedDayButton: {backgroundColor: '#6200ee'},
  selectedDayText: {color: 'white', fontWeight: 'bold'},
  eventCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  eventName: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
  noEvents: {textAlign: 'center', marginTop: 20, color: '#666'},
});

// Register the app (required for React Native CLI)
AppRegistry.registerComponent('UniversityEventApp', () => UniversityEventApp);
