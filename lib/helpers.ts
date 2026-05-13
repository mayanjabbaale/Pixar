import { Dimensions } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypesNamespace";

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');


export const getImageSize = (height: number, width: number) => {
    if(width > height){
        return 250;
    }else if(height > width){
        return 300
    }else{
        return 200;
    }
}