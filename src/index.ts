/**
 * Converts a number to its Persian ordinal representation
 * @param number - The number to convert (0 to 999,999,999,999)
 * @returns The Persian ordinal string
 * @throws Error if number is invalid or out of range
 */
export default function numberToPersianOrdinal(number: number): string {
    if (!Number.isInteger(number) || number < 0 || number > 999999999999) {
        throw new Error("Number must be an integer between 0 and 999,999,999,999");
    }

    if (number === 0) return "صفرم";

    const units = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
    const teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
    const tens = ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
    const hundreds = ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
    const scales = ['', 'هزار', 'میلیون', 'میلیارد'];

    function convertHundreds(num: number): string {
        if (num === 0) return '';

        let word = '';
        const hundred = Math.floor(num / 100);
        const remainder = num % 100;

        if (hundred > 0) {
            word += hundreds[hundred];
            if (remainder !== 0) {
                word += ' و ';
            }
        }

        if (remainder >= 10 && remainder < 20) {
            word += teens[remainder - 10];
        } else {
            const ten = Math.floor(remainder / 10);
            const unit = remainder % 10;

            if (ten > 0) {
                word += tens[ten];
                if (unit !== 0) {
                    word += ' و ';
                }
            }
            if (unit > 0) {
                word += units[unit];
            }
        }

        return word.trim();
    }

    const groups: number[] = [];
    let tempNumber = number;

    while (tempNumber > 0) {
        groups.unshift(tempNumber % 1000);
        tempNumber = Math.floor(tempNumber / 1000);
    }

    const parts: string[] = [];
    const groupCount = groups.length;

    for (let i = 0; i < groupCount; i++) {
        const group = groups[i];
        const scaleIndex = groupCount - 1 - i;

        if (group > 0) {
            const groupWord = convertHundreds(group);
            if (scaleIndex > 0) {
                parts.push(groupWord + ' ' + scales[scaleIndex]);
            } else {
                parts.push(groupWord);
            }
        }
    }

    let result = parts.join(' و ');

    if (result.endsWith('سه')) {
        result = result.slice(0, -2) + 'سوم';
    } else {
        result += 'م';
    }

    return result;
}

export {numberToPersianOrdinal};

export type PersianOrdinalOptions = {
    validateRange?: boolean;
};

export function numberToPersianOrdinalWithOptions(
    number: number,
    options: PersianOrdinalOptions = {}
): string {
    return numberToPersianOrdinal(number);
}