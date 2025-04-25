import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export const cn = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes));
}

export const BASE_URL = "http://localhost:3000";

// Configure Axios globally to include credentials
axios.defaults.withCredentials = true;