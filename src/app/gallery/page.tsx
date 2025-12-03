import { GalleryLayout } from '@/componets/ui/GalleryLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery',
};

export default function Page() {
    return (
        <>
            <GalleryLayout />
        </>
    )
}