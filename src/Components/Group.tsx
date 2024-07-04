import React from 'react';
import { useFormContext, useFieldArray, FieldErrors } from 'react-hook-form';
import Task from './Task';
import { FormData } from '../Types';

interface GroupProps {
	groupIndex: number;
	removeGroup: (index: number) => void;
}

const Group: React.FC<GroupProps> = ({ groupIndex, removeGroup }) => {
	const {
		control,
		formState: { errors },
	} = useFormContext<FormData>();
	const {
		fields: tasks,
		append: appendTask,
		remove: removeTask,
	} = useFieldArray({
		control,
		name: `Estimate.Group.${groupIndex}.Task`,
	});

	const groupErrors = (errors as FieldErrors<FormData>)?.Estimate?.Group?.[
		groupIndex
	]?.Task;

	return (
		<div style={{ marginBottom: '1rem' }}>
			<h2>Group {groupIndex + 1}</h2>
			{tasks.map((task, taskIndex) => (
				<Task
					key={task.id}
					groupIndex={groupIndex}
					taskIndex={taskIndex}
					removeTask={removeTask}
				/>
			))}
			{groupErrors && <p>{groupErrors.message}</p>}
			<button
				type="button"
				onClick={() => appendTask({ Title: '', Description: '', Material: [] })}
			>
				Add Task
			</button>
			<button type="button" onClick={() => removeGroup(groupIndex)}>
				Remove Group
			</button>
		</div>
	);
};

export default Group;
