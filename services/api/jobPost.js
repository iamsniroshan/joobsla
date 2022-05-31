const createJobPostApi = async (reqBody) => {
    const response = await fetch('/api/jobpost/create', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data
  }
  
  export default createJobPostApi

