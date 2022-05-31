async function createJobPostApi (reqBody) {
    const response = await fetch('/api/jobpost/create', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  }
  
  export default createJobPostApi

