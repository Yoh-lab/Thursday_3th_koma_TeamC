import React from 'react'
import SportItem from '../SportsItem'
import thumbnail_image from "./images/Sports2.png";

const ItemSkateboard = () => {
  const rule_text = `
  スケボーのルールはあーだこーだ
`;
  const highlights_text = `
  スケボーの魅力はあーだこーだ
`;
  const rule = rule_text.trim().split("\n");
  const highlights = highlights_text.trim().split("\n");
  return (
    <SportItem
      title={"スケートボード"}
      thumbnail_image={thumbnail_image}
      rule={rule}
      highlights={highlights}
    />
  )
}

export default ItemSkateboard