import moment from "moment";

export default {
  filters: {
    formatDate(str, format, outputFormat = "YYYY-MM-DD HH:mm:ss") {
      if (format == null) {
        return moment(str).format(outputFormat);
      } else {
        return moment(str).format("MMMM Do YYYY, h:mm:ss a");
      }
    },

    diffForHumans(str) {
      return moment(str).from(moment());
    },
  },
};
