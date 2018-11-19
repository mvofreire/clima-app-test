import api from "../api";
import { cacheMinutesDuration, CACHE_TIMER_KEY, CACHE_DATA_KEY } from "config";
import { getLocalStorage, saveLocalStorage } from "utils/storage";
import moment from "moment";

export const cacheWasExpired = time => {
  if (!time) return false;

  const now = moment();
  const momentTimerCache = moment(time);
  var duration = moment.duration(now.diff(momentTimerCache));

  return duration.minutes() > cacheMinutesDuration ? true : false;
};

export const getWeathers = async (cities, forceReload = false) => {
  const cache = getLocalStorage(CACHE_DATA_KEY);
  const timerCache = getLocalStorage(CACHE_TIMER_KEY);
  const reload = cacheWasExpired(timerCache) || forceReload;

  if (!cache || reload) {
    const { data } = await api.get("/group", {
      id: cities.join(",")
    });

    const now = moment();
    saveLocalStorage(CACHE_TIMER_KEY, now);
    saveLocalStorage(CACHE_DATA_KEY, data.list);

    return {
      load: "network",
      data: data.list,
      timer: now
    };
  }

  return {
    load: "cache",
    data: cache,
    timer: moment(timerCache)
  };
};
