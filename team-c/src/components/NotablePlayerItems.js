import { useState, useEffect, React } from "react";
import {
    HStack,
    CircularProgress,
    SimpleGrid,
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
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={{ sm: 12, md: 32, lg: 8, xl: 32 }}
                        style={{
                            // width: "80vw",
                            // backgroundColor: "blue",
                        }}
                    >
                        {
                            Object.keys(getData).map((key) => (
                                <NotablePlayerButton
                                    title={getData[key].title}
                                    icon={getData[key].icon}
                                    thumbnail_image={getData[key].image}
                                    playerName={getData[key].name}
                                    sports={getData[key].sports}
                                    explanation={getData[key].explanation}
                                />
                            ))
                        }
                    </SimpleGrid>
                </HStack>
            </>
        )
    }
}

export default SportsItems