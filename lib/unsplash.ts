// unsplash.js
import { createApi } from 'unsplash-js';
import { Random } from 'unsplash-js/dist/methods/photos/types';

export const unsplash = createApi({
  accessKey: 'Bl3NusMOO62RgBOh_7d3XETkcs1KMVMoKdAI279SZ6E',
});

export const getImages = async (): Promise<Random[]> => {
  try {
    const res = await unsplash.photos.getRandom({ count: 10 });

    if (res.errors) {
      throw new Error(res.errors[0]);
    }

    return res.response as Random[];
    
  } catch (error) {
    throw error instanceof Error ? error : new Error(String(error));
  }
};