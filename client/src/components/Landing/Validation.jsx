const Validation = (userData) => {
    const errors ={};

    if (!userData.email) {
        errors.email = 'Email can\'t be empty';
      } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'Invalid email';
      } else if (userData.email.length > 35) {
        errors.email = 'Email cannot exceed 35 characters';
      }


    if (!userData.password) {
        errors.password = 'Password cannot be empty';
       } else if (!/\d/.test(userData.password)) {
        errors.password = 'Password must contain at least one number';
       } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Password must be between 6 and 10 characters';
       }

  return errors;
};

export default Validation;