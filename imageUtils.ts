
// ImageKit URL Endpoint from environment variables
const IMAGEKIT_ENDPOINT = import.meta.env.VITE_IMAGEKIT_ENDPOINT || 'https://ik.imagekit.io/mattfigler/';

/**
 * Generates an optimized ImageKit URL with transformations.
 * 
 * @param path - The image path in ImageKit (e.g., 'portfolio/shot.jpg') or a full URL.
 * @param width - Optional width transformation.
 * @param quality - Optional quality transformation (default 80).
 * @param extra - Optional extra transformations (e.g., 'h-flip').
 * @returns The optimized URL or the original path if it's an external URL.
 */
export const getOptimizedImage = (path: string, width?: number, quality: number = 80, extra?: string) => {
    // If it's already a full URL (like Unsplash) or a local /public path, return as is
    if (path.startsWith('http') || path.startsWith('/')) {
        return path;
    }

    let cleanPath = path;
    let pathExtra = '';

    // Support embedded transformations in path like "image.jpg:h-flip"
    if (path.includes(':')) {
        const parts = path.split(':');
        cleanPath = parts[0];
        pathExtra = parts[1];
    }

    // Build the transformation parameters
    const transformations = [`q-${quality}`];
    if (width) {
        transformations.push(`w-${width}`);
    }

    if (extra) {
        transformations.push(extra);
    }

    if (pathExtra) {
        transformations.push(pathExtra);
    }

    // Construct the final ImageKit URL
    return `${IMAGEKIT_ENDPOINT}${cleanPath}?tr=${transformations.join(',')}`;
};
