import moment from "moment";

export function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  return moment(isoDateString).format("YYYY/M/D HH:mm");
}
