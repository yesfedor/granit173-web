import {GalleryResponse} from "@/types";
import {fetchGallery, getFullImageUrl} from "@/utils/api";

export default async function GalleryPage() {
    const galleryResponse: GalleryResponse = await fetchGallery();
    const categories = galleryResponse.data;
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((img, i) => (
                    <img
                        className="h-full object-cover max-w-full rounded-lg object-center"
                        key={img.id}
                        src={getFullImageUrl(img.imageUrl)}
                        alt={img.name}
                    />
                ))}
            </div>
        </div>

);
}