import dayjs from 'dayjs';
import 'dayjs/locale/en';

export function formatTime(dateString: string): string {
    const format = "YYYY-MM-DD ddd";
    return dayjs(dateString).locale('en').format(format);
}
