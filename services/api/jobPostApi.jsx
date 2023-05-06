
export const getJobPostApi = async () => {
  const response = await fetch('/api/jobpost/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

export const deleteJobPostApi = async (jobPostId) => {
  const response = await fetch(`/api/jobpost/delete/${jobPostId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};
