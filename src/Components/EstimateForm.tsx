import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import Group from './Group';
import { FormData } from '../Types';

interface EstimateFormProps {
	onSubmit: (e: React.BaseSyntheticEvent) => void;
}

const EstimateForm: React.FC<EstimateFormProps> = ({ onSubmit }) => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<FormData>();
	const {
		fields: groups,
		append: appendGroup,
		remove: removeGroup,
	} = useFieldArray({
		control,
		name: 'Estimate.Group',
	});

	return (
		<form onSubmit={onSubmit} className="estimate-form">
			<h1>Estimate Form</h1>
			<label>
				Title:
				<input {...register('Estimate.Title')} />
				{errors.Estimate?.Title && <p>{errors.Estimate.Title.message}</p>}
			</label>
			<label>
				Expiry Date:
				<input type="date" {...register('Estimate.ExpiryDate')} />
				{errors.Estimate?.ExpiryDate && (
					<p>{errors.Estimate.ExpiryDate.message}</p>
				)}
			</label>
			{groups.map((group, groupIndex) => (
				<Group
					key={group.id}
					groupIndex={groupIndex}
					removeGroup={removeGroup}
				/>
			))}
			<button type="button" onClick={() => appendGroup({ Task: [] })}>
				Add Group
			</button>
			<button type="submit">Submit</button>
		</form>
	);
};

export default EstimateForm;
