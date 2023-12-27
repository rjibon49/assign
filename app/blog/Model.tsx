"use client"

import Image from "next/image";
import { useState } from "react";

interface GalleryItemProps {
    data: {
      id: number;
      title: string;
      image: string;
    };
  }

const Model: React.FC<GalleryItemProps> = ({ data }) => {    
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleImageClick = (data:any) => {
        setSelectedImage(data.id);
        alert(`You clicked on ${data.title}`);
      }
    return (
        <div>
            <Image src={data.image} alt={data.title} width="80" height="80" onClick={() => handleImageClick(data.id)} style={{ cursor: 'pointer' }} />
            
        </div>
    )
}

export default Model;