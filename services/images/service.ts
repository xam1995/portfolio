const BASE_PATH = "images/"

export function getNotFoundImage() {
    return getImage("notfound", "notfound.webp")
}

export function getImage(directory: string, name: string) {
    return `${BASE_PATH}${directory}/${name}`;
}

export function getImageFromPath(url: string) {
    return `${url}`;
}