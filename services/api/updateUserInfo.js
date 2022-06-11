const updateUserInfoApi = async (reqBody) => {
    const response = await fetch('/api/userinfo/update', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data
  }
  
  export default updateUserInfoApi

