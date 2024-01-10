import { useState, useEffect, React } from "react";
import {
    HStack,
    CircularProgress,
} from '@chakra-ui/react'
import HandleGetData from "../firebase/GetNotablePlayerItemData";
// import SportsButton from "./SportsButton";
import NotablePlayerButton from "./NotablePlayerButton";

const SportsItems = () => {
    const [getData, setGetData] = useState(null);
    useEffect(() => {
        const fetchDataAndSetData = async () => {
            const data = await HandleGetData();
            setGetData(data);
            console.log(data);
        };
        fetchDataAndSetData();
    }, []);

    if (!getData) {
        return (
            <div>
                <div>Loading...</div>
                <CircularProgress />
            </div>
        );
    } else {
        return (
            <>
                <HStack spacing={50} marginLeft={10} marginRight={10}>
                    {
                        Object.keys(getData).map((key) => (
                            <NotablePlayerButton
                                title={getData[key].title}
                                thumbnail_image={getData[key].image}
                                playerName={getData[key].name}
                                explanation={getData[key].explanation}
                            />
                        ))
                    }
                </HStack>
            </>
        )
    }
}

export default SportsItems