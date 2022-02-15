// Your code here

class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        )
    }
} 

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.arr)) return;
        if (this.count !== 3) return;
        let side1 = this.arr[0]
        let side2 = this.arr[1]
        let side3 = this.arr[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      }
}

class Square extends Polygon {
    get isValid() {
        //
    };

    get area() {
        return this.arr[0] * this.arr[0]
    }
}