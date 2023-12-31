import React from 'react'
import SportItem from '../SportsItem'
import thumbnail_image from "./images/Sports3.png";

const ItemBreaking = () => {
  const rule_text = `
  ブレイキンのルールはあーだこーだ
`;
  const highlights_text = `
  ブレイキンの魅力はあーだこーだ
`;
  const rule = rule_text.trim().split("\n");
  const highlights = highlights_text.trim().split("\n");
  return (
    <SportItem
      title={"ブレイキン"}
      thumbnail_image={thumbnail_image}
      rule={rule}
      highlights={highlights}
    />
  )
}

export default ItemBreaking