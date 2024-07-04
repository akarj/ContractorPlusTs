import React, { useEffect } from 'react';
import { useFormContext, useWatch, FieldErrors } from 'react-hook-form';
import { FormData } from '../Types';

interface MaterialProps {
	groupIndex: number;
	taskIndex: number;
	materialIndex: number;
	removeMaterial: (index: number) => void;
}

const Material: React.FC<MaterialProps> = ({
	groupIndex,
	taskIndex,
	materialIndex,
	removeMaterial,
}) => {
	const {
		register,
		control,
		setValue,
		formState: { errors },
	} = useFormContext<FormData>();

	const rate = useWatch({
		control,
		name: `Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Rate`,
		defaultValue: 0,
	});

	const quantity = useWatch({
		control,
		name: `Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Quantity`,
		defaultValue: 0,
	});

	useEffect(() => {
		const total = rate * quantity;

		setValue(
			`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Total`,
			total
		);
	}, [rate, quantity, setValue, groupIndex, taskIndex, materialIndex]);

	const materialErrors = (errors as FieldErrors<FormData>)?.Estimate?.Group?.[
		groupIndex
	]?.Task?.[taskIndex]?.Material?.[materialIndex];

	return (
		<div style={{ marginBottom: '1rem' }}>
			<h4>Material {materialIndex + 1}</h4>
			<label>
				Name:
				<input
					{...register(
						`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Name`
					)}
				/>
				{materialErrors?.Name && <p>{materialErrors.Name.message}</p>}
			</label>
			<label>
				Rate:
				<input
					type="number"
					{...register(
						`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Rate`,
						{ valueAsNumber: true }
					)}
				/>
				{materialErrors?.Rate && <p>{materialErrors.Rate.message}</p>}
			</label>
			<label>
				Quantity:
				<input
					type="number"
					{...register(
						`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Quantity`,
						{ valueAsNumber: true }
					)}
				/>
				{materialErrors?.Quantity && <p>{materialErrors.Quantity.message}</p>}
			</label>
			<label>
				Total:
				<input type="number" value={rate * quantity} readOnly />
			</label>
			<button type="button" onClick={() => removeMaterial(materialIndex)}>
				Remove Material
			</button>
		</div>
	);
};

export default Material;
