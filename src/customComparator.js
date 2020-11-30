export default function customComparator(
  dataArray,
  arrayToCompare,
  filterCondition,
  sorterCondition
) {
  function filter() {
    if (
      dataArray.length === 0 ||
      arrayToCompare === 0 ||
      !Array.isArray(dataArray) ||
      !Array.isArray(arrayToCompare) ||
      typeof filterCondition !== "string" ||
      typeof sorterCondition !== "string" ||
      filterCondition === "" ||
      sorterCondition === ""
    )
      return [];
    let filtered = [];
    arrayToCompare.forEach((compareElement) => {
      filtered.push(
        dataArray.filter((current) =>
          // eslint-disable-next-line no-eval
          eval(filterCondition)
        )
      );
    });
    return filtered;
  }

  function sorted() {
    let sorted = filter();
    sorted.forEach((current) => {
      current.sort((a, b) => {
        // eslint-disable-next-line no-eval
        return eval(sorterCondition);
      });
    });
    return sorted;
  }

  return sorted();
}
