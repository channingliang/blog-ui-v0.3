import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

export function formatTime(dateString: string): string {
    const format = "YYYY-MM-DD ddd";
    return dayjs(dateString).locale('en').format(format);
}

export function formatTimeZH(dateString: string): string {
    const format = "YYYY年MM月DD日 星期dd";
    return dayjs(dateString).locale('zh-cn').format(format);
}
