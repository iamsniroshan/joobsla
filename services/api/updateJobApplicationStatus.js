const updateApplicationStatusApi = async (reqBody) => {
    const response = await fetch('/api/jobapplication/updateapplicationstatus', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data
  }
  
  export default updateApplicationStatusApi

