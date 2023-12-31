import React from 'react'
import SportItem from '../SportsItem'
import thumbnail_image from "./images/Sports1.png";

const ItemClimbing = () => {
    const rule_text = `
  クライミングのルールはあーだこーだ
`;
    const highlights_text = `
  クライミングの魅力はあーだこーだ
`;
    const rule = rule_text.trim().split("\n");
    const highlights = highlights_text.trim().split("\n");
    return (
        <SportItem
            title={"スポーツクライミング"}
            thumbnail_image={thumbnail_image}
            rule={rule}
            highlights={highlights}
        />
    )
}

export default ItemClimbing