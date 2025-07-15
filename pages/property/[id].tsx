import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
  
  if (!property) return <p>Property not found</p>;

  const enhancedProperty = {
    ...property,
    description: `This beautiful ${property.name} located in ${property.address.city}, ${property.address.country} offers ${property.offers.bed} bedrooms and ${property.offers.shower} bathrooms. Perfect for ${property.offers.occupants} guests.`,
    images: [
      property.image,
      "https://example.com/interior1.jpg",
      "https://example.com/interior2.jpg",
      "https://example.com/bathroom.jpg",
      "https://example.com/view.jpg"
    ],
    reviews: [
      {
        name: "Alex Johnson",
        avatar: "https://example.com/avatar1.jpg",
        rating: 5,
        comment: "Amazing place! Would definitely stay here again.",
        date: "2023-05-15"
      },
      {
        name: "Sarah Miller",
        avatar: "https://example.com/avatar2.jpg",
        rating: 4,
        comment: "Great location and comfortable beds. The view was spectacular!",
        date: "2023-04-22"
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyDetail property={enhancedProperty} />
            <ReviewSection reviews={enhancedProperty.reviews || []} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <BookingSection price={property.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}