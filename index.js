export default function numberToPersianOrdinal(number) {
    if (number < 0 || number > 999 || !Number.isInteger(number)) {
        throw new Error("Number must be an integer between 0 and 999");
    }

    if (number === 0) return "صفرم";

    const units = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه']
    const teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
    const tens = ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
    const hundreds = ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];

    let word = '';
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;

    if (hundred > 0) {
        word += hundreds[hundred] + (remainder !== 0 ? ' و ' : 'م');
    }

    if (remainder >= 10 && remainder < 20) {
        word += teens[remainder - 10] + 'م';
    } else {
        const ten = Math.floor(remainder / 10);
        const unit = remainder % 10;

        if (ten > 0) {
            word += tens[ten] + (unit !== 0 ? ' و ' : 'م');
        }
        if (unit > 0) {
            if (unit === 3) {
                word += 'سوم'
            } else {
                word += units[unit] + 'م';
            }
        }
    }

    return word.trim();
}
