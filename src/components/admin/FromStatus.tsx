'use client';
import { useFormStatus } from 'react-dom';

const FormStatus = () => {
  const formState = useFormStatus();
  return (
    <p className={`my-2 w-full text-center text-xs text-white`}>
      {formState.pending && 'Submitting'}
    </p>
  );
};

export default FormStatus;
