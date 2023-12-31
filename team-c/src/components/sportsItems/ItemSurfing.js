import React from 'react'
import SportItem from '../SportsItem'
import thumbnail_image from "./images/Sports4.png";

const ItemSurfing = () => {
  const rule_text = `
  サーフィンのルールはあーだこーだ
`;
  const highlights_text = `
  サーフィンの魅力はあーだこーだ
`;
  const rule = rule_text.trim().split("\n");
  const highlights = highlights_text.trim().split("\n");
  return (
    <SportItem
      title={"サーフィン"}
      thumbnail_image={thumbnail_image}
      rule={rule}
      highlights={highlights}
    />
  )
}

export default ItemSurfing