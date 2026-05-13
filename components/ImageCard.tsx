import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ellipsis } from 'lucide-react-native';
import { Image } from 'expo-image';
import { getImageSize } from '@/lib/helpers';
import clsx from 'clsx';

interface ImageCardProps {
    title?: string,
    source: any,
    width: number,
    height: number,
    index: number
}


const ImageCard = ({ title, source, height, width, index }: ImageCardProps) => {

       const getImageHeight = () => {
        return {height: getImageSize(height, width)}
    }

    const isLastInRow = ( index + 1 ) % 2 === 0;
 
    return (
        <Pressable className={clsx('mb-1 w-full', isLastInRow ? '' : 'mr-5')} >
            <Image source={source} transition={1000} style={[{width: '100%', borderRadius: 10, overflow: 'hidden'}, getImageHeight()]} />
            <View className='flex-row justify-between my-1'>
                <Text className='ml-1' numberOfLines={1}>{title}</Text>
                <TouchableOpacity className='mr-1'>
                    <Ellipsis size={20} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

const border = StyleSheet.create({border: {borderCurve: 'continuous'}})

export default ImageCard