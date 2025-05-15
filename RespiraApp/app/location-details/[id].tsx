import { useLocalSearchParams } from "expo-router";

import { LocationDetailsPage } from "@/features";

export default function LocationDetails() {
  const { id } = useLocalSearchParams();

  return <LocationDetailsPage locationId={id as string} />;
}
