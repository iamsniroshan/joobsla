const getUserInfoApi = async () => {
    const response = await fetch('/api/userinfo/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data
  }
  
  export default getUserInfoApi