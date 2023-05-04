const getAppliedJobPostApi = async () => {
    const response = await fetch('/api/jobapplication/appliedjobpost', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data
  }
  
  export default getAppliedJobPostApi