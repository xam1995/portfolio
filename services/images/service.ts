export const IMAGE_BASE_PATH: string = '@/public/images/';

export function getNotFoundImage() {
    return getImage("parallax", "portfolio_mountain_lake_7.webp")
}

export function getImage(directory: string, name: string) {
    return `${IMAGE_BASE_PATH}/${directory}/${name}`;
}

export function getImageFromPath(name: string) {
    return `${IMAGE_BASE_PATH}/${name}`;
}