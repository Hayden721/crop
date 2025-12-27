import axios from "axios";

// axios 기본 URL 지정
const baseURL = import.meta.env.VITE_CORS_BACK_END;

const axiosPlain = axios.create({
	baseURL: baseURL,
})

export default axiosPlain;