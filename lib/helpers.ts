// Portrait images (taller than wide) get more vertical space
const PORTRAIT_HEIGHT = 300;
// Landscape images (wider than tall) are capped shorter to avoid excess whitespace
const LANDSCAPE_HEIGHT = 250;
// Square images use a neutral middle-ground height
const SQUARE_HEIGHT = 200;

export const getImageHeight = (height: number, width: number): number => {
    if (!Number.isFinite(height) || !Number.isFinite(width) || height <= 0 || width <= 0) {
        throw new RangeError(`getImageHeight requires finite positive numbers, got height=${height}, width=${width}`);
    }

    if (width > height) {
        return LANDSCAPE_HEIGHT;
    } else if (height > width) {
        return PORTRAIT_HEIGHT;
    } else {
        return SQUARE_HEIGHT;
    }
};