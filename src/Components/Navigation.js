import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React,{useState} from 'react';
import Timer from './Timer'
import './Navigation.css';
export default function Navigation(){

  const [tabIndex,setTabIndex]=React.useState(0)
  const colors = ['#800000','#008080','#000067']
  const bg = colors[tabIndex]

    return(
     // <Tabs onChange={(index)=> setTabIndex(index)} bg={bg} isFitted variant='line' colorScheme='red'>
      <Tabs  isFitted variant='enclosed' colorScheme='red'>
      <TabList >
        <Tab>Pomodoro</Tab>
        <Tab>Short Break</Tab>
        <Tab>Long Break</Tab>
      </TabList>
    
      <TabPanels>
        <TabPanel>
          <p><Timer/></p>
        </TabPanel>
        <TabPanel>
          <p>Short Break</p>
        </TabPanel>
        <TabPanel>
          <p>Long Break</p>
        </TabPanel>
      </TabPanels>
    </Tabs>

    )
}