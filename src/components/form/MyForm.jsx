// import React from 'react';
// import { Button } from './components/button/button';


import PropTypes from 'prop-types'; // Import prop types package
const MyForm = (props) => {
  const { formData, handleChange, handleSubmit } = props;

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="firstName"
        className='form-control mb-3'
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        className='form-control mb-3'
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button type="submit" className='btn btn-primary'>Submit</button>
    </form>
    </div>
  );
};

MyForm.propTypes = {
  formData: PropTypes.object.isRequired, // Validate formData prop as object and it's required
  handleChange: PropTypes.func.isRequired, // Validate handleChange prop as function and it's required
  handleSubmit: PropTypes.func.isRequired, // Validate handleSubmit prop as function and it's required
};

export default MyForm;
