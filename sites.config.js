
export default {
  functions: {
    sortDate: (list) => {
      const res = [...list].sort((a, b) => {
        const dateA = new Date(a.data.date);
        const dateB = new Date(b.data.date);
        return dateB - dateA; // descending order
      });
      return res;
    }
  }
}
