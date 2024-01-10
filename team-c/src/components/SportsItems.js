import { useState, useEffect, React } from "react";
import {
    HStack,
    CircularProgress,
    SimpleGrid,
} from '@chakra-ui/react'
import HandleGetData from "../firebase/GetSportsItemData";
import SportsButton from "./SportsButton";

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
            <div
                style={{
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <HStack spacing={50} marginLeft={10} marginRight={10}>
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}
                        style={{
                            // width: "80vw",
                            // backgroundColor: "blue",
                        }}
                    >
                        {
                            Object.keys(getData).map((key) => (
                                <SportsButton
                                    title={getData[key].title}
                                    thumbnail_image={getData[key].image}
                                    rule={getData[key].rule}
                                    highlight={getData[key].highlight}
                                />
                            ))
                        }
                    </SimpleGrid>
                </HStack>
            </div>
        )
    }
}

export default SportsItems