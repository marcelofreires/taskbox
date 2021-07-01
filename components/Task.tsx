import * as React from 'react';
import { TextInput, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from '../constants/globalStyles';

export interface TaskProps {
  id: string
  title: string
  state: string
}

export interface TaskStoryProps {
  task: TaskProps
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
}

const Task = ({
  task: {
    id,
    title,
    state,
  },
  onArchiveTask,
  onPinTask,
}: TaskStoryProps) => (
  <SafeAreaView style={styles.ListItem}>
    <TouchableOpacity onPress={() => onArchiveTask(id)}>
      {state !== 'TASK_ARCHIVED' ? (
        <View style={styles.CheckBox} />
      ) : (
        <AntDesign name="checksquareo" size={20} color="#2cc5d2" />
      )}
    </TouchableOpacity>
    <TextInput
      placeholder="Input Title"
      style={
        (state === 'TASK_ARCHIVED')
          ? styles.ListItemInputTaskArchived
          : styles.ListItemInputTask
      }
      value={title}
      editable={false}
    />
    <TouchableOpacity onPress={() => onPinTask(id)}>
      <AntDesign
        name="star"
        size={20}
        color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
      />
    </TouchableOpacity>
  </SafeAreaView>
);

export default Task
