class MyArray{
  length: number;
  capacity: number;
  buffer: ArrayBuffer;
  data: Int32Array;
  constructor(capacity = 4) {
    this.length = 0;
    this.capacity = capacity;
    this.buffer = new ArrayBuffer(8);
    this.data = new Int32Array(this.buffer);
  }
  push(value: number) {
    if (this.capacity === this.length) {
      this._resize();
    }
    this.data[this.length] = value;
    this.length++;
  }
  get(index: number) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds")
    }
    return this.data[index]
  }
  set(index: number, value: number) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds")
    }
    this.data[index] = value;
  }
  pop() {
    this.length -= 1;
  }
  _resize() {
    this.capacity *= 2;
    const newBuffer = new ArrayBuffer(this.capacity * 4);
    const newData = new Int32Array(newBuffer);
    newData.set(this.data)
    this.buffer = newBuffer;
    this.data = newData;
  }
}