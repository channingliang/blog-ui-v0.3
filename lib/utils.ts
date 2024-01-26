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

export function calculateAge(): number {
    const now = dayjs();
    const birth = dayjs("2001-03-21");
    return now.diff(birth, 'year');
}

export function calculateSteamAge(): string {
    const now = dayjs();
    const steamLaunchDate = dayjs("2016-08-16");

    const years = now.diff(steamLaunchDate, 'year');
    const months = now.subtract(years, 'year').diff(steamLaunchDate, 'month');
    const fractionalYear = months / 12;
    const totalYears = years + fractionalYear;
    return totalYears.toFixed(1);
}
