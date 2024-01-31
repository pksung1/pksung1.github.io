import dayjs from "dayjs"

export const postCreateDate = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD")
}