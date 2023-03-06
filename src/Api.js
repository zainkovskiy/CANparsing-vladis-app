import axios from "axios";

export const getData = async () => {
  const res = await axios.get('http://5.188.42.123:3000/')
  if (res?.data && res?.data?.status === 'OK') {
    return res.data.data
  }
  return []
}