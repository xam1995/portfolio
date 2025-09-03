
export function getNotFoundImage() {
    return getImage("parallax", "portfolio_mountain_lake_7.webp")
}

export function getImage(directory: string, name: string) {
    return `${directory}/${name}`;
}

export function getImageFromPath(name: string) {
    return `${name}`;
}