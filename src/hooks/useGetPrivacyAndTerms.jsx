import { useState } from "react";

export const useGetPrivacyAndTerms = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	
	const getPrivacyAndTerms = async (type) => { // type: 'privacyPolicy' | 'termsAndConditions'
		setIsLoading(true);
		setError(null);
		
		try {
			const response = await fetch('https://injobnito.plavno.app:8080/api/v1/media/documents');
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			
			const data = await response.json();
			
			if (data?.data?.[type]?.link) {
				window.open(data?.data?.[type].link, '_blank');
			} else {
				setError('Документ не найден');
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
			console.error('Ошибка при загрузке документа:', err);
		} finally {
			setIsLoading(false);
		}
	};
	
	return {
		isLoading,
		error,
		getPrivacyAndTerms
	};
};
