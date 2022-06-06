const getJobPostApi = async () => {
    const response = await fetch('/api/jobpost/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data
  }
  
  export default getJobPostApi