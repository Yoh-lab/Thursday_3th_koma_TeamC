import React, { useState, useEffect } from 'react'
import {
    Text,
} from '@chakra-ui/react';

const CountDown = () => {
    const [displayString, setDisplatString] = useState(UpdateDisplayString());
    function UpdateDisplayString() {
        let olympicsDate = new Date('2024-07-26T18:00:00Z');
        let currentDate = new Date();
        let remainingTime = olympicsDate - currentDate + 1; //残り時間をミリ秒で計算
        if (remainingTime <= 0) {
            return "開催されました！";
        }
        // ミリ秒を日、時間、分、秒に変換
        const miriSecondOfOneDay = 1000 * 60 * 60 * 24;
        const miriSecondOfOneHour = 1000 * 60 * 60;
        const miriSecondOfOneMinute = 1000 * 60;
        const miriSecondOfOneSecond = 1000;
        let remainingDays = Math.floor(remainingTime / miriSecondOfOneDay);
        let remainingHours = Math.floor(remainingTime % miriSecondOfOneDay / miriSecondOfOneHour);
        let remainingMinutes = Math.floor(remainingTime % miriSecondOfOneHour / miriSecondOfOneMinute);
        let remainingSeconds = Math.floor(remainingTime % miriSecondOfOneMinute / miriSecondOfOneSecond);
        return "開催まであと" + String(remainingDays) + "日 " + String(remainingHours) + "時間 " + String(remainingMinutes) + "分 " + String(remainingSeconds) + "秒 ";
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplatString(UpdateDisplayString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        // <Text fontSize={{ base: '36px', md: '40px', lg: '42px' }} color="white" as="b">
        <Text fontSize={{ sm: "2xl", md: "6xl" }} color="white" as="b">
            {displayString}
        </Text >
    )
}

export default CountDown