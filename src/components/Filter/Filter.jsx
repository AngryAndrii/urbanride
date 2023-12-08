import { Field, Form, Formik } from 'formik';

const Filter = () => {
  const handleSubmit = event => {
    return event;
  };

  const initialValues = { brand: '' };

  const cars = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field as="select" name="brand"></Field>

            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
