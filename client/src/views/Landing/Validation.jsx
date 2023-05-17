const Validation = (userData) => {
    const errors = {};

    if(!userData.emai) {
        errors.email = "Email can´t be empty";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "Invalid email";
    } else if (userData.email.length > 30) {
        errors.email = "Email can´t have mora than 30 characters";
    }

    if(!userData.password) {
        errors.password = "Password can´t be empty";
    } else if (!/\d/.test(userData.password)) {
        errors.password = "Invalid password";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Password should be between 6 and 10 characters";
    }
    return errors;
    };

export default Validation;
