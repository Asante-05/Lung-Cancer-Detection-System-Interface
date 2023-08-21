let feedback_fromLogIN = null





export const addResultToDatabase = async (result: object, remark: string) => {

  const result_formData = new FormData();

  result_formData.append('scan_id', result.scan_id);
  result_formData.append('patient_id', result.patient_id);
  result_formData.append('remarks', remark);


  try {
    const response = await fetch('http://127.0.0.1:8000/patient/save/', {
      method: 'POST',
      body: result_formData,
    });
    return response.json();
  } catch (error) {
    throw new Error('Error saving remarks:', error);
  }

}




export const getScanInformation = async (scan_id: string) => {

  const view_formData = new FormData();
  view_formData.append('scan_id', scan_id);
  

  try {
    const response = await fetch('http://127.0.0.1:8000/patient/viewdetails/', {
      method: 'POST',
      body: view_formData,
    });
    return await response.json();
  } catch (error) {
    throw new Error('Error sending file to server:', error);
  }

};

export const uploadFile = (patient_id: string, image: File) => {

  const patient_formData = new FormData();
  patient_formData.append('patient_id', patient_id);
  patient_formData.append('image', image);
  

  return fetch('http://127.0.0.1:8000/patient/analyse/', {
    method: 'POST',
    body: patient_formData,
  })
    .then((response) => response.json()
    ).catch((error) => {
      throw new Error('Error sending file to server:', error);
    });

};




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
    feedback_fromLogIN = response
    if (!response.ok) {
      // return response
    }else{
      window.location.href = '/Main'
    }
    const data = await response.json();
    return data; // Return the login response data
  } catch (error) {
    // console.error('Error:', error.message);
    // throw error; 
  }

};
export default feedback_fromLogIN



export async function signupUser (signup_email:string ,signup_username:string, signup_password: string) {

  const signinData = {
    email: signup_email,
    username: signup_username,
    password: signup_password
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/auth/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signinData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.email[0]) 
      throw new Error(errorData.message || 'Signing up failed.'); 
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error:', error.message);
    throw error; 
  }

};





