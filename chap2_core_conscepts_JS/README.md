# Chapter 2 — Core JavaScript Concepts

This folder contains short example scripts covering JavaScript core concepts.

Files
- `04_Indentifiers.js` — examples of identifiers and basic usage.
- `05_var_Let.js` — demonstrates `var` vs `let` scope behavior.

Requirements
- Node.js (v14+). Tested with v24.

Run examples
From repository root run:

```powershell
node "chap2_core_conscepts_JS/04_Indentifiers.js"
node "chap2_core_conscepts_JS/05_var_Let.js"
```

Notes
- These are tiny example scripts intended for learning; modify and experiment.
- If you want, I can expand this README with explanations and expected outputs.

Explanations & Expected Output

- `04_Indentifiers.js`
	- Purpose: show valid identifier names and naming rules (letters, digits, _, $; cannot start with a digit; avoid reserved words).
	- Example content (may be empty in this repo):
		```javascript
		let myVar = 1;
		const $elem = 'x';
		let _temp2 = 3;
		console.log(myVar, $elem, _temp2);
		```
	- Expected output: `1 x 3`

- `05_var_Let.js`
	- Purpose: demonstrate differences between `var` (function-scoped, hoisted) and `let` (block-scoped).
	- Actual file behavior (current):
		- Declares `var a = 10` and logs `10`.
		- Inside `test()` reassigns `a` with `var` multiple times and logs `20`, `30`, then `within function 30` (because `var` is function-scoped and later assignments overwrite the same `a`).
		- Declares `let b = 40` and logs `40`.
		- Inside `test1()` uses block-scoped `let b` values `50` and `60`, logging `50`, `60`, then `let 50` (inner block `b` does not overwrite the function/local `b`).
	- Expected console output when running the file:
		```text
		10
		hello
		20
		30
		within function 30
		40
		50
		60
		let 50
		```

Want me to fill `04_Indentifiers.js` with concrete examples and expected output as well? I can add sample code and push it.
