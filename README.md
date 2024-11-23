# Persian Ordinal Numbers Converter

This package provides a JavaScript utility function for converting numbers into **Persian ordinal** words. It supports
numbers ranging from **1** to **20** and adheres to the grammatical rules of the Persian language for ordinal
numbers.
Ideal for applications requiring localized number formatting in Persian.

## Key Features

- Converts integers (0 to 20) to Persian ordinal words.
- Handles complex ordinal forms, including large numbers.
- Supports formatting with Persian linguistic nuances.
- Lightweight and easy to use.

## Installation

Install the package via npm:

```bash
npm install @jsfather/persian-ordinal
````

## Usage

```javascript
const numberToPersianOrdinal = require('@jsfather/persian-ordinal');

console.log(numberToPersianOrdinal(1));    // اول
console.log(numberToPersianOrdinal(13))    // سیزدهم
console.log(numberToPersianOrdinal(20));   // بیستم
```

### API

#### `numberToPersianOrdinal(number)`

Converts an integer into its Persian ordinal word.

- **Parameters**:
    - `number` (integer): The number to convert. Must be between `1` and `20`.

- **Returns**:
    - A string representing the Persian ordinal word.

- **Throws**:
    - An error if the number is not an integer or is out of range.

### Examples

| Input | Output |
|-------|--------|
| `1`   | اول    |
| `13`  | سیزدهم |
| `20`  | بیستم  |

