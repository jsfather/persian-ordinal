# Persian Ordinal Numbers Converter

This package provides a JavaScript/TypeScript utility function for converting numbers into **Persian ordinal** words. It supports
numbers ranging from **0** to **999,999,999,999** (999 billion) and adheres to the grammatical rules of the Persian language for ordinal
numbers. Ideal for applications requiring localized number formatting in Persian.

## Key Features

- ✅ **Large number support**: Converts integers from 0 to 999,999,999,999 (999 billion)
- ✅ **TypeScript support**: Full TypeScript definitions included
- ✅ **Dual module support**: Works with both ES modules and CommonJS
- ✅ **Persian linguistic accuracy**: Handles complex ordinal forms and Persian grammar rules
- ✅ **Lightweight and fast**: Optimized for performance
- ✅ **Zero dependencies**: No external dependencies required

## Installation

Install the package via npm:

```bash
npm install @jsfather/persian-ordinal
```

## Usage

### ES Modules (Recommended)

```javascript
import numberToPersianOrdinal from '@jsfather/persian-ordinal';

console.log(numberToPersianOrdinal(0));           // صفرم
console.log(numberToPersianOrdinal(1));           // یکم
console.log(numberToPersianOrdinal(3));           // سوم
console.log(numberToPersianOrdinal(13));          // سیزدهم
console.log(numberToPersianOrdinal(20));          // بیستم
console.log(numberToPersianOrdinal(123));         // یکصد و بیست و سوم
console.log(numberToPersianOrdinal(1000));        // یک هزارم
console.log(numberToPersianOrdinal(1234567));     // یک میلیون و دویست و سی و چهار هزار و پانصد و شصت و هفتم
console.log(numberToPersianOrdinal(1000000000));  // یک میلیاردم
```

### CommonJS

```javascript
const numberToPersianOrdinal = require('@jsfather/persian-ordinal');

console.log(numberToPersianOrdinal(673)); // ششصد و هفتاد و سوم
```

### TypeScript

```typescript
import numberToPersianOrdinal from '@jsfather/persian-ordinal';

const result: string = numberToPersianOrdinal(1234);
console.log(result); // یک هزار و دویست و سی و چهارم
```

## API

#### `numberToPersianOrdinal(number: number): string`

Converts an integer into its Persian ordinal word.

- **Parameters**:
    - `number` (number): The number to convert. Must be an integer between `0` and `999,999,999,999`.

- **Returns**:
    - A string representing the Persian ordinal word.

- **Throws**:
    - `Error`: If the number is not an integer or is out of the supported range.

## Examples

| Input | Output |
|-------|--------|
| `0` | صفرم |
| `1` | یکم |
| `3` | سوم |
| `13` | سیزدهم |
| `20` | بیستم |
| `123` | یکصد و بیست و سوم |
| `1000` | یک هزارم |
| `1234` | یک هزار و دویست و سی و چهارم |
| `1000000` | یک میلیونم |
| `1234567` | یک میلیون و دویست و سی و چهار هزار و پانصد و شصت و هفتم |
| `1000000000` | یک میلیاردم |

## Error Handling

The function validates input and throws descriptive errors:

```javascript
try {
    numberToPersianOrdinal(-1);
} catch (error) {
    console.log(error.message); // "Number must be an integer between 0 and 999,999,999,999"
}

try {
    numberToPersianOrdinal(1.5);
} catch (error) {
    console.log(error.message); // "Number must be an integer between 0 and 999,999,999,999"
}
```

## Supported Number Ranges

- **Units**: 0-9 → صفرم, یکم, دوم, سوم, چهارم, پنجم, ششم, هفتم, هشتم, نهم
- **Tens**: 10-99 → دهم, یازدهم, بیستم, سی‌ام, etc.
- **Hundreds**: 100-999 → یکصدم, دویستم, etc.
- **Thousands**: 1,000-999,999 → یک هزارم, دو هزارم, etc.
- **Millions**: 1,000,000-999,999,999 → یک میلیونم, دو میلیونم, etc.
- **Billions**: 1,000,000,000-999,999,999,999 → یک میلیاردم, دو میلیاردم, etc.

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Build TypeScript only
npm run build:tsc
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details.

## Changelog

### v1.1.0
- ✅ Added TypeScript support with full type definitions
- ✅ Extended number support to 999,999,999,999 (999 billion)
- ✅ Added support for thousands, millions, and billions
- ✅ Improved module exports (ES modules + CommonJS)
- ✅ Enhanced error handling and validation
- ✅ Added comprehensive test coverage

### v1.0.3
- ✅ Basic support for numbers 0-999
- ✅ Persian ordinal conversion