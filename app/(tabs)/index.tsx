import { Minus, Ellipsis } from "lucide-react-native";
import { Text, View, Image, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getImages } from "@/lib/unsplash";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { useState, useEffect } from "react";
import { imageData } from "@/lib/data";
import ImageCard from "@/components/ImageCard";

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
    <SafeAreaView className="flex-1 bg-white mx-1" edges={['top']}>
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
        <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}} >
          <View className="flex-row">
            {/* Column 1 */}
            <View className="flex-1 mr-1">
              <ImageCard source={imageData[0]?.source} width={imageData[0].width} height={imageData[0].height} />
              <ImageCard source={imageData[1]?.source} width={imageData[1].width} height={imageData[1].height}/>
              <ImageCard source={imageData[2]?.source} width={imageData[2].width} height={imageData[2].height}/>
              <ImageCard source={imageData[4]?.source} width={imageData[4].width} height={imageData[4].height}/>
              <ImageCard source={imageData[5]?.source} width={imageData[5].width} height={imageData[5].height}/>
            </View>

            {/* Column 2 */}
            <View className="flex-1">
              <ImageCard source={imageData[6]?.source} width={imageData[6].width} height={imageData[6].height}/>
              <ImageCard source={imageData[7]?.source} width={imageData[7].width} height={imageData[7].height}/>
              <ImageCard source={imageData[8]?.source} width={imageData[8].width} height={imageData[8].height}/>
              <ImageCard source={imageData[9]?.source} width={imageData[9].width} height={imageData[9].height}/>
              <ImageCard source={imageData[3]?.source} width={imageData[3].width} height={imageData[3].height}/>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}