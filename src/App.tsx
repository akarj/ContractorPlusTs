import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { estimateSchema } from './validationSchema';
import EstimateForm from './Components/EstimateForm';
import { FormData } from './Types.ts';

const App: React.FC = () => {
	const methods = useForm<FormData>({
		resolver: zodResolver(estimateSchema),
		defaultValues: {
			Estimate: {
				Title: '',
				ExpiryDate: '',
				Group: [],
			},
		},
	});

	const onSubmit = (data: FormData) => {
		console.log('Form Data:', data);
	};

	return (
		<FormProvider {...methods}>
			<EstimateForm onSubmit={methods.handleSubmit(onSubmit)} />
		</FormProvider>
	);
};

export default App;
