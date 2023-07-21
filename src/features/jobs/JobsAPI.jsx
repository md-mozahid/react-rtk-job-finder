import axiosInstance from '../../utils/axios'

export const getJobs = async () => {
  const response = await axiosInstance.get('/jobs')
  return response.data
}

export const addJob = async (data) => {
  const response = await axiosInstance.post('/jobs', data)
  return response.data
}

export const editJob = async (id, data) => {
  const response = await axiosInstance.put(`/jobs/${id}`, data)
  return response.data
}

export const deleteJob = async (id) => {
  const response = await axiosInstance.delete(`/jobs/${id}`)
  return response.data
}
