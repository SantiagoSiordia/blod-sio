import axios from "axios";
import {
  SERVER_URL
} from "@env";
import { URL } from 'react-native-url-polyfill';

export const appAxios = axios.create({
  baseURL: new URL(SERVER_URL).href,
  headers: {
    "Content-Type": "application/json",
    Authorization: '',
  },
});