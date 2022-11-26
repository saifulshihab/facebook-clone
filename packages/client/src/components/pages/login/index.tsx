import { Formik } from 'formik';
import React from 'react';
import Button from '../../limb/button/Button';
import { TextInput } from '../../limb/input/TextInput';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
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
          onSubmit={() => {
            // console.log(values);
          }}
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
                Login
              </Button>
              <div className="mt-2 text-center pb-3 border-b border-gray-300">
                <p className="text-primary cursor-pointer underline">
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
