import { FaSleigh } from "react-icons/fa";
import platform from "../data/platform";
import { Platform } from "./useGames";

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

const usePlatform = () => ({data:platform, error:null, isLoading: false})

export default usePlatform;