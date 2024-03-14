import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ImageContainer,
} from '@/app/components';

export const RootLayout = () => {

  return (
    <Tabs defaultValue="tab-one" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tab-one">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-two">Tab 2</TabsTrigger>
      </TabsList>
      <>
        <TabsContent value="tab-one">
          <ImageContainer />
        </TabsContent>
        <TabsContent value="tab-two">
          Content
        </TabsContent>
      </>
    </Tabs>
  )
}