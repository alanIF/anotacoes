<h3>Instalação</h3>
<ul>
    <li>npm install typescript --save-dev</li>
    <li>Configurando: npx tsc --init</li>
</li>
</ul>
<hr>
<h3>Variaveis</h3>
<ul>
    <li>let firstName: string = "Dylan"; let v: any = true;  let w: unknown = 1; let x: never = true;  let y: undefined = undefined;  let z: null = null;</li>
</ul>
<hr>
<h3>Matrizes</h3>
<ul>
    <li>const names: string[] = [];</li>
    <li>names.push("Dylan"); </li>
</ul>
<hr>
<h3>Tuplas</h3>
<ul>
    <li>let ourTuple: [number, boolean, string];</li>
    <li>ourTuple = [5, false, 'Coding God was here'];</li>
    <li>const graph: [x: number, y: number] = [55.2, 41.3];</li>
</ul>
<hr>
<h3>Objetos</h3>
<ul>
    <li>const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};</li>
<li>car.type = "Ford"; // no error</li>
</ul>
<hr>
<h3>Enum</h3>
<ul>
    <li>
        enum CardinalDirections {
            North = 1,
            East,
            South,
            West
         }
        // logs 1
        console.log(CardinalDirections.North);
    </li>
    <li>
        enum StatusCodes {
            NotFound = 404,
            Success = 200,
            Accepted = 202,
            BadRequest = 400
            }
            // logs 404
            console.log(StatusCodes.NotFound);
            // logs 200
            console.log(StatusCodes.Success);
    </li>
</ul>
<hr>
<h3>Aliasas </h3>
<ul>
    <li>type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}
</li>
<li>const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};</li>
</ul>
<hr>
<h3>Interfaces</h3>
<ul>
    <li>
        interface Rectangle {
        height: number,
        width: number
        }

        interface ColoredRectangle extends Rectangle {
        color: string
        }

        const coloredRectangle: ColoredRectangle = {
        height: 20,
        width: 10,
        color: "red"
        };
    </li>

</ul>
<hr>
<h3>Functions</h3>
<ul>
    <li>
       function getTime(): number {
  return new Date().getTime();
}
    </li>
    <li>
    function printHello(): void {
  console.log('Hello!');
}</li>
<li>
    function multiply(a: number, b: number) {
  return a * b;
}
</li>
<li>
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
</li>
<li>
    function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
</li>

</ul>


<hr>
<h3>Classes</h3>
<ul>
    <li>
        class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";
    </li>
    <li>
        class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); /    
    </li>
<li>
    abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
</li>

</ul>
