import { Minus, Ellipsis } from "lucide-react-native";
import { Text, View, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getImages } from "@/lib/unsplash";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { useState, useEffect } from "react";
import { imageData } from "@/lib/data";

export default function Home() {
  const [photos, setPhotos] = useState<Random[]>([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loading = false;

  // useEffect(() => {
  //   getImages()
  //     .then(setPhotos)
  //     .catch((err) => setError(err.message))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <SafeAreaView className="bg-white h-full" edges={['top']}>
      <View className="px-4 pt-5 self-start items-center">
        <Text className="font-semibold text-xl">All</Text>
        <View className="-mt-3">
          <Minus color="#000" size={32} strokeWidth={2} />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" className="mt-10" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-10">{error}</Text>
      ) : (
        <FlatList
          data={imageData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ gap: 4 }}
          contentContainerClassName='gap-1 mx-1'
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const isEven = index % 2 === 0;

            return (
              <Image
                // source={{ uri: item.urls.regular }}
                source={item.source}
                className="flex-1 h-96 rounded-2xl"
                // style={{ aspectRatio: 1 }}
                style={{
                  width: '100%',
                  aspectRatio: item.width / item.height, // Uses the dynamic ratio
                }}
                resizeMode="cover"
              />
            )
          }}
        />
      )}
    </SafeAreaView>
  );
}