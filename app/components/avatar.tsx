import * as AvatarPrimitive from '@rn-primitives/avatar';
import { Text } from 'react-native';



function UserAvatar() {
  return (
      <AvatarPrimitive.Root className='' alt="Zach Nugent's Avatar">
        {/* <AvatarPrimitive.Image  /> */}
        <AvatarPrimitive.Fallback className=' rounded-full bg-orange-500 h-8 w-8 flex items-center justify-center'>
          <Text className='text-white font-bold'>L</Text>
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
  );
}

export default UserAvatar;