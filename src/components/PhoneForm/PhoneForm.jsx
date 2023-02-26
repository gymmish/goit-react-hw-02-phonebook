// import PropTypes from 'prop-types';
import { Formik, Form, FastField, ErrorMessage, Field } from 'formik';

const PhoneForm = () => {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <label>
          Name
          <FastField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </label>
      </Form>
    </Formik>
  );
};

export default PhoneForm;
