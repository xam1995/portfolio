const BASE_PATH = "images/"

export function getNotFoundImage() {
    return getImage("parallax", "portfolio_mountain_lake_7.webp")
}

export function getImage(directory: string, name: string) {
    return `${BASE_PATH}${directory}/${name}`;
}

export function getImageFromPath(url: string) {
    return `${url}`;
}