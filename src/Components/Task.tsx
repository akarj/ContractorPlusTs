import React from 'react';
import { useFormContext, useFieldArray, FieldErrors } from 'react-hook-form';
import Material from './Material';
import { FormData } from '../Types';

interface TaskProps {
	groupIndex: number;
	taskIndex: number;
	removeTask: (index: number) => void;
}

const Task: React.FC<TaskProps> = ({ groupIndex, taskIndex, removeTask }) => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<FormData>();
	const {
		fields: materials,
		append: appendMaterial,
		remove: removeMaterial,
	} = useFieldArray({
		control,
		name: `Estimate.Group.${groupIndex}.Task.${taskIndex}.Material`,
	});

	const taskErrors = (errors as FieldErrors<FormData>)?.Estimate?.Group?.[
		groupIndex
	]?.Task?.[taskIndex];

	return (
		<div style={{ marginBottom: '1rem' }}>
			<h3>Task {taskIndex + 1}</h3>
			<label>
				Title:
				<input
					{...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Title`)}
				/>
				{taskErrors?.Title && <p>{taskErrors.Title.message}</p>}
			</label>
			<label>
				Description:
				<textarea
					{...register(
						`Estimate.Group.${groupIndex}.Task.${taskIndex}.Description`
					)}
				/>
				{taskErrors?.Description && <p>{taskErrors.Description.message}</p>}
			</label>
			{materials.map((material, materialIndex) => (
				<Material
					key={material.id}
					groupIndex={groupIndex}
					taskIndex={taskIndex}
					materialIndex={materialIndex}
					removeMaterial={removeMaterial}
				/>
			))}
			{taskErrors?.Material && <p>{taskErrors.Material.message}</p>}
			<button
				type="button"
				onClick={() =>
					appendMaterial({ Name: '', Rate: 0, Quantity: 0, Total: 0 })
				}
			>
				Add Material
			</button>
			<button type="button" onClick={() => removeTask(taskIndex)}>
				Remove Task
			</button>
		</div>
	);
};

export default Task;
