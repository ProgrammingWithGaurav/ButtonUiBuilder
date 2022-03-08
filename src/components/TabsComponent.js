import React from 'react';
import { Tab, TabPanel, TabList, TabPanels, Container, Tabs } from '@chakra-ui/react';
import EditButton from './Editor/EditButton';

function TabsComponent() {
  return (
    <div>
      <Container maxW='container.lg'>
        <Tabs isManual variant='enclosed'>
          <TabList>
            <Tab>Button</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabsOutput />
        </Tabs>
      </Container>
    </div>
  )
}

const TabsOutput = () => {
  return (
    <TabPanels>
      <TabPanel>
        <EditButton />
      </TabPanel>
      <TabPanel>
      ButtonUiBuilder  - Build Button Ui Fast and get code in seconds
      </TabPanel>

    </TabPanels>
  )
}
    

export default TabsComponent;