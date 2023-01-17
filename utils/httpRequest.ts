import axios, { AxiosResponse } from "axios";
import { Movie } from "../types";

interface Response {
  status: number;
  data?: Movie;
  message?: string;
}

async function httpRequest(url: string): Promise<Response> {
  try {
    const res: AxiosResponse = await axios.get(url);
    return { status: 200, data: res.data };
  } catch (error) {
    return { status: 400, message: "The content was not found" };
  }
}

export default httpRequest;