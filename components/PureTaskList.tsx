import * as React from 'react';
import { FlatList, Text, SafeAreaView, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Task, { TaskProps } from './Task';
import LoadingRow from './LoadingRow';
import { styles } from '../constants/globalStyles';

export interface PureTaskListProps {
  loading?: boolean
  tasks: TaskProps[]
  onPinTask: () => void
  onArchiveTask: () => void
}

const PureTaskList = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: PureTaskListProps) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </SafeAreaView>
    );
  }

  if (tasks.length === 0) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <View style={styles.WrapperMessage}>
          <AntDesign name="checksquareo" size={64} color="#2cc5d2" />
          <Text style={styles.TitleMessage}>You have no tasks</Text>
          <Text style={styles.SubtitleMessage}>Sit back and relax</Text>
        </View>
      </SafeAreaView>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(task => task.state === 'TASK_PINNED'),
    ...tasks.filter(task => task.state !== 'TASK_PINNED'),
  ];

  return (
    <SafeAreaView style={styles.ListItems}>
      <FlatList
        data={tasksInOrder}
        keyExtractor={task => task.id}
        renderItem={({ item }) => <Task key={item.id} task={item} {...events} />}
      />
    </SafeAreaView>
  );
}

export default PureTaskList;
