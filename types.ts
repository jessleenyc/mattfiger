
export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // Embed URL (Youtube/Vimeo)
  thumbnail: string;
  category: string;
  director?: string;
  cinematographer?: string;
  format?: string;
  gallery?: string[]; // Array of image URLs
  badgeText?: string;
  badgeColor?: string;
  episodes?: { title: string; videoUrl: string }[];
  aspectRatio?: string;
  galleryAspectRatio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredImage: string;
  projects: Project[];
  comingSoon?: boolean;
  isGalleryView?: boolean;
  customProjectCountText?: string;
}
