export default function createInt8TypedArray(length, position, value) {
  const newArr = new ArrayBuffer(length);
  const arrVal = new DataView(newArr);

  try {
    arrVal.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return arrVal;
}
