import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import thankYouAudio from '../assets/audios/thankyou.mp3';
import natureForm from '../assets/images/nature-form.jpg';

const Background = styled.div`
  background-image: url(${natureForm});
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
`;

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
`;

const FormHeading = styled.h2`
font-size: 2rem;
font-weight: lighter;
font-family: 'Russo One', sans-serif;
letter-spacing: 0.2rem;
text-align: center;
color: #fff;
padding-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;

// const Label = styled.label`
//   margin-bottom: 5px;
// `;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2C6BD3;
  color: #fff;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #2C6BD3
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: #fff;
`;

const ErrorMessage = styled.p`
  color: #fff;
  font-size: 12px;
  margin-top: 4px;
  letter-spacing: 1px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;


function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    country: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    country: '',
  });

  const [success, setSuccess] = useState(false);

  const playThankYouAudio = () => {
    const audio = new Audio(thankYouAudio);
    audio.play();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // called when form is submitted, sends POST request to server to register user and updates errors and success state variable accordingly
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      try {
        // api endpoint for registration form on the server
        const apiEndpoint = 'http://localhost:3000/api/registration';
  
        // using axios library to send a POST request with the formData
        const response = await axios.post(apiEndpoint, formData);
  
        if (response.status === 201) {
          setSuccess(true);
          playThankYouAudio();
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({ ...errors, email: 'Email already exists' });
        } else {
          console.error('An error occurred while submitting the form:', error);
        }
      }
    }
  };
  

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {
      name: '',
      email: '',
      phoneNumber: '',
      gender: '',
      country: '',
    };

  // Validate name
  if (!formData.name.trim()) {
    formIsValid = false;
    newErrors.name = 'Name is required';
  } else {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      formIsValid = false;
      newErrors.name = 'Name can only contain letters and spaces';
    }
  }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Email is not valid';
    }

    // Validate phone number (optional field)
    if (formData.phoneNumber.trim()) {
      const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        formIsValid = false;
        newErrors.phoneNumber = 'Phone number is not valid';
      }
    }

    // Validate gender
    if (!formData.gender) {
      formIsValid = false;
      newErrors.gender = 'Gender is required';
    }

    // Validate country
    if (!formData.country) {
      formIsValid = false;
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  return (
    <Background>
      <FormContainer>
        {!success ? (
          <>
            <FormHeading>Registration Form</FormHeading>
            <Form onSubmit={handleSubmit}>
              <InputRow>
                <InputGroup>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputGroup>
              </InputRow>
              <InputRow>
                <InputGroup>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                  />
                  {errors.phoneNumber && (
                    <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                  )}
                </InputGroup>
                <InputGroup>
                  <Select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                  <Select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="india">India</option>
                  </Select>
                  {errors.country && (
                    <ErrorMessage>{errors.country}</ErrorMessage>
                  )}
                </InputGroup>
              </InputRow>
              <Button type="submit">Submit Now</Button>
            </Form>
          </>
        ) : (
          <SuccessMessage>Thank you for registering!</SuccessMessage>
        )}
      </FormContainer>
    </Background>
  );
}
export default RegistrationForm;