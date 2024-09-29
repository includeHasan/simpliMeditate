import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationGallery from '@/components/GuidedAffirmationGallery'
const affirmations = () => {
  return (
    <View className='flex-1'>
      <AppGradient
      colors={["#2e1f58","#54426b","#a790af"]}
      >
       <ScrollView showsVerticalScrollIndicator={false}>
         <Text
         className='text-white text-2xl font-bold text-left mt-5'
         >Change your believe through affirmations</Text>
         <View>
       {AFFIRMATION_GALLERY.map((gallery) => (
         <GuidedAffirmationGallery
         key={gallery.title}
          title={gallery.title}
          previews={gallery.data}
          />
        ))}
         </View>
       </ScrollView>
      </AppGradient>
    </View>
  )
}

export default affirmations
//hellp woprfdlkemdkc hello world my name is hasan khan hello world my name is hasan khan