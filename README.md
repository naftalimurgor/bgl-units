# bgl-units
<img src="Icon.png" style="height: 60px;"/>

> npm module to convert between Satoshi units(smallest denomination for Bitgesell BGL) and BGL <b>with lightweight precision</b>.

<br>

## The Problem

![The problem](http://i.imgur.com/H1Ck3bF.png)

<br>

## Install

```bash
npm install --save bgl-units

# OR

yarn add bglunits
```

<br>

## Usage

#### Node.js

```js
var bglunits= require("bgl-units");

bglunits.toSatoshiUnits(1);
//=>100000000

bglunits.toBGL(100000000);
//=>1
```

<br>

#### Web

```html
<!-- package injected as "bglunits" -->
<script src="https://rawgit.com/naftalimurgor/bglunits/master/index.bundle.js"></script>
<script>
  console.log("One Satoshi equals " + bglunits.toBitcoin(1) + " Bitcoin");
</script>
```

<br>

Or download it with `npm install bgl-units` and reference it as:

```html
<script src="node_modules/bglunits/index.bundle.js"></script>
```

<br>

### Error Handling

```javascript
try {
  bglunits.toSatoshiUnits(false); //Throws TypeError
} catch (err) {
  console.log(err);
}
```

<br>

## API

`bglunits.toSatoshiUnits(number || string)`
`bglunits.toBGL(number || string)`

[Read more on the Wiki](https://github.com/dawsonbotsford/bglunits/blob/master/wiki/index.md)

<br>

## FAQ

- What is a Satoshi?

  - Satoshi is to Bitcoin as pennies are to the dollar. Except that there are 100,000,000 Satoshi in one Bitcoin.

- Why do I need a module when I can just divide or multiply by 100,000,000?
  - [See here](http://repl.it/zlF/4) - Floating point errors are a problem. So `bgl-units` uses a tiny bignum library (big.js) to ensure accurate conversions!

<br>

## Tests

```bash
npm test
```

<br>

## License

MIT © [Forked from: Dawson Botsford](https://dawsbot.com)
