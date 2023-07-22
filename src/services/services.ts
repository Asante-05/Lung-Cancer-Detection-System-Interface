// authService.js
import axios from 'axios';














export async function loginUser(user_email: string, user_password: string) {
  const loginData = {
    email: user_email,
    password: user_password
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Parse the error response
      throw new Error(errorData.message || 'Login failed.'); // Use the error message from the response or a default message
    }

    const data = await response.json();
    return data; // Return the login response data
  } catch (error) {
    console.error('Error:', error.message);
    throw error; // Rethrow the error to be handled in the component
  }
};






export const handleSignup = async (email , username, password) => {

  try{

     const response = await axios.post('http://127.0.0.1:8000/auth/signup/', {email, username, password})
     const data = response.data
      
     if (response.status == 200 && data.success )  {
        console.log('Signup successful!', response.data);
        return{ success: true, data}
        // You can handle successful signup here (e.g., show a success message, redirect the user, etc.)
      }
      else{
        return {success: false, message: data.message || "Log In failed please check credentials"}
        // You can handle signup errors here (e.g., show an error message to the user)
      }
  }catch (error){
    return {success: false, message: 'An error occurred during SignUp. Please try again later'}
  }

};








