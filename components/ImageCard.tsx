import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ellipsis } from 'lucide-react-native';
import { Image } from 'expo-image';
import { getImageHeight } from '@/lib/helpers';
import clsx from 'clsx';

interface ImageCardProps {
    title?: string,
    source: string,
    width: number,
    height: number,
    index: number
}

const ImageCard = ({ title, source, height, width, index }: ImageCardProps) => {
    const isRightColumn = index % 2 !== 0;
    return (
        <Pressable style={{
            marginBottom: 4,
            width: '100%',
            paddingLeft: isRightColumn ? 2 : 0,
            paddingRight: isRightColumn ? 0 : 2,
        }}>            
            <View style={{ width: '100%', height: getImageHeight(height, width), borderRadius: 10, overflow: 'hidden', borderCurve: 'continuous' }}>
                <Image source={source} transition={1000} style={{ width: '100%', height: getImageHeight(height, width) }} />
            </View>
            <View className='flex-row justify-between my-1'>
                <Text className='ml-1' numberOfLines={3}>{title}</Text>
                <TouchableOpacity className='mr-1'>
                    <Ellipsis size={20} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export default ImageCard