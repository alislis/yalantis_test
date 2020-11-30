import customComparator from "./customComparator";

describe("comparator testing", () => {
  // comparator is filtering first array by second, and then sorting subarrays

  test("send two alfabet arrays", () => {
    const firstArray = ["Aa", "Ab", "Ac", "Ba", "Ca"];
    const secondArray = ["A", "B", "C"];
    const condition1 = "current.charAt(0) === compareElement";
    const condition2 = "a.localeCompare(b)";
    const expectArray = [["Aa", "Ab", "Ac"], ["Ba"], ["Ca"]];
    expect(
      customComparator(firstArray, secondArray, condition1, condition2)
    ).toEqual(expectArray);
  });

  test("send two numeric arrays", () => {
    const firstArray = [123, 12, 23, 25, 28, 35, 39];
    const secondArray = [1, 2, 3];
    const condition1 =
      "current.toString().charAt(0) === compareElement.toString()";
    const condition2 = "a > b ? 1 : -1";
    const expectArray = [
      [12, 123],
      [23, 25, 28],
      [35, 39],
    ];
    expect(
      customComparator(firstArray, secondArray, condition1, condition2)
    ).toEqual(expectArray);
  });

  test("send not array", () => {
    const firstArray = "something weird";
    const secondArray = [1, 2, 3];
    const condition1 =
      "current.toString().charAt(0) === compareElement.toString()";
    const condition2 = "a > b ? 1 : -1";
    expect(
      customComparator(firstArray, secondArray, condition1, condition2)
    ).toEqual([]);
  });

  test("send empty data", () => {
    expect(customComparator([], [], "", "")).toEqual([]);
  });
});
