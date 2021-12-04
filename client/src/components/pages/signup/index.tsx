import { Formik } from 'formik';
import React from 'react';
import Button from '../../limb/button/Button';
import { TextInput } from '../../limb/input/TextInput';
import * as yup from 'yup';

const RegisterPage: React.FC = () => {
  const fieldValidationSchema = yup.object({
    emailOrPhone: yup.string().required('Email or phone required'),
    password: yup.string().required('Password required'),
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-96 h-auto bg-white rounded-md shadow-md p-4">
        <Formik
          initialValues={{
            emailOrPhone: '',
            password: '',
          }}
          onSubmit={() => {}}
          validationSchema={fieldValidationSchema}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                inputsize="large"
                type="text"
                placeholder="Email address or phone number"
                name="emailOrPhone"
              />
              <TextInput
                inputsize="large"
                name="password"
                type="password"
                placeholder="Password"
              />
              <Button
                type="submit"
                size="large"
                block
                fontSize="text-xl"
                fontWeight="font-bold"
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
