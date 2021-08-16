import React from "react";
import { SketchCard, SketchCardProps } from "../../components/SketchCard/SketchCard";
import { junkText, unsplashUrl } from "../../mockData";

const mockCard: SketchCardProps = {
    titleText: junkText,
    imageSrc: `${unsplashUrl}?cb=3`,
    bodyText: junkText,
}


export const Sketchbook = () => {
    return <div><SketchCard {...mockCard} /></div>
}