import { Text } from "@react-three/drei";

const CustomText = ({children, ...props}) => (<Text color='black' anchorX='center' anchorY='middle' fontSize={1} {...props}>{children}</Text>);

export default CustomText