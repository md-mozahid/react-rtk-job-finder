import axiosInstance from '../../utils/axios'

export const getJobs = async () => {
  const response = await axiosInstance.get('/jobs')
  return response.data
}
