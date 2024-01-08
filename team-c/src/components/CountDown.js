import React from 'react'
import {
    Text,
} from '@chakra-ui/react';

const CountDown = () => {
    // オリンピック2024の開催日は2024年7月26日
    let olympicsDate = new Date('2024-07-26T18:00:00Z');

    // 現在の日時を取得
    let currentDate = new Date();

    // 残り時間を計算
    let remainingTime = olympicsDate - currentDate;

    // ミリ秒を日、時間、分、秒に変換
    const miriSecondOfOneDay = 1000 * 60 * 60 * 24;
    const miriSecondOfOneHour = 1000 * 60 * 60;
    const miriSecondOfOneMinute = 1000 * 60;
    const miriSecondOfOneSecond = 1000;
    let remainingDays = Math.floor(remainingTime / miriSecondOfOneDay);
    let remainingHours = Math.floor(remainingTime % miriSecondOfOneDay / miriSecondOfOneHour);
    let remainingMinutes = Math.floor(remainingTime % miriSecondOfOneHour / miriSecondOfOneMinute);
    let remainingSeconds = Math.floor(remainingTime % miriSecondOfOneMinute / miriSecondOfOneSecond);
    return (
        // <Text fontSize={{ base: '36px', md: '40px', lg: '42px' }} color="white" as="b">
        <Text fontSize="4xl" color="white" as="b">
            開催まであと{remainingDays}日{remainingHours}時間{remainingMinutes}分{remainingSeconds}秒
        </Text >
    )
}

export default CountDown