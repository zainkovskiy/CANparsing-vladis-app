import axios from "axios";

export const getData = async (source) => {
  const res = await axios.post('http://5.188.42.123:3000/', source)
  // const res = await axios.post('http://localhost:3000/', source)
  if (res?.data && res?.data?.status === 'OK') {
    console.log(res.data);
    return res.data.data
  }
  return []
}