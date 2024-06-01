import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../../components/atoms/button/Button';
import { TextInput } from '../../components/atoms/input/TextInput';

const LoginPage: React.FC = () => {
  const fieldValidationSchema = yup.object({
    emailOrPhone: yup.string().required('Email or phone required'),
    password: yup.string().required('Password required'),
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-auto w-96 rounded-md bg-white p-4 shadow-md">
        <Formik
          initialValues={{
            emailOrPhone: '',
            password: '',
          }}
          onSubmit={() => {
            // console.log(values);
          }}
          validationSchema={fieldValidationSchema}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                inputSize="large"
                type="text"
                placeholder="Email address or phone number"
                name="emailOrPhone"
              />
              <TextInput
                inputSize="large"
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
                Login
              </Button>
              <div className="mt-2 border-b border-gray-300 pb-3 text-center">
                <p className="cursor-pointer text-primary underline">
                  Forgot password?
                </p>
              </div>
            </form>
          )}
        </Formik>

        <div className="mt-5 text-center">
          <Link to="/register">
            <Button size="large" bg="bg-greenLight" fontSize="text-xl">
              Create New Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
