import { Minus } from "lucide-react-native";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getImages } from "@/lib/unsplash";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { useState, useEffect } from "react";
import ImageCard from "@/components/ImageCard";
import { FlashList } from "@shopify/flash-list";

export default function Home() {
  const [photos, setPhotos] = useState<Random[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getImages()
      .then(setPhotos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="px-4 pt-5 self-start items-center">
        <Text className="font-semibold text-xl">All</Text>
        <View className="-mt-3">
          <Minus color="#000" size={32} strokeWidth={2} />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" className="mt-10" />
      ) : error ? (
        <Text className="text-center mt-10">{error}</Text>
      ) : (
        <FlashList
          data={photos}
          masonry
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 4 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const title = item.description || item.alt_description || item.user?.name || "Untitled Photo";
            return <ImageCard title={title} source={item.urls.regular} width={item.width} height={item.height} index={index} />;
          }}
        />
      )}
    </SafeAreaView>
  );
}