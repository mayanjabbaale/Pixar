import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ellipsis } from 'lucide-react-native';
import { imageData } from '@/lib/data';

interface ImageCardProps {
    title?: string,
    source: any
    width: number,
    height: number
}

const ImageCard = ({title, source, width, height}: ImageCardProps) => {
    return (
        <Pressable style={{width: '100%'}} >
            <Image source={source} className='rounded-2xl h-96' resizeMode='cover' style={{width: '100%', aspectRatio: width/height}} />
            <View className='flex-row justify-between'>
                <Text className='font-semibold'>{title}</Text>
                <TouchableOpacity className='mr-1'>
                    <Ellipsis size={20} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export default ImageCard