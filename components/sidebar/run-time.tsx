'use client';

import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Circle } from "@mui/icons-material";

dayjs.extend(duration);

interface RuntimeProps {
    className?: string;
}

const RunTime :React.FC<RuntimeProps> = ({ className }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const minuteTimer = setInterval(() => setCurrentTime(new Date()), 60000);
        const secondTimer = setInterval(() => setBlink(b => !b), 1000);
        return () => {
            clearInterval(minuteTimer);
            clearInterval(secondTimer);
        };
    }, []);

    const calculateDuration = (current: Date) => {
        const startDate = dayjs('2023-08-23T00:00:00');
        const currentDayjs = dayjs(current);
        const diff = dayjs.duration(currentDayjs.diff(startDate));

        return {
            years: diff.years(),
            months: diff.months(),
            days: diff.days(),
            hours: diff.hours(),
            minutes: diff.minutes()
        };
    };

    const { years, months, days, hours, minutes } = calculateDuration(currentTime);

    return (
        <div className={`flex items-center ${className}`}>
            <Circle sx={{ fontSize: 8 }} className={`${blink ? 'opacity-100' : 'opacity-0'} text-green-500 mr-2`} />
            <p>
                {years > 0 && <span>{years} 年&nbsp;</span>}
                {months} 月 {days} 天 {hours} 小时 {minutes} 分钟
            </p>

        </div>
    );
};

export default RunTime;
