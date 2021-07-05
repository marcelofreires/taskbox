import * as React from 'react';
import { connect } from 'react-redux';

import PureTaskList from './PureTaskList';
import { archiveTask, pinTask } from '../lib/redux';

const TaskList = ({ tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  return <PureTaskList tasks={tasks} {...events} />;
}

export default connect(
  ({ tasks }) => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchiveTask: id => dispatch(archiveTask(id)),
    onPinTask: id => dispatch(pinTask(id)),
  }),
)(TaskList);
