// Import the required modules
import React, { useState } from 'react';
import { View, Panel, PanelHeader, Header, Group, Cell, Div, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

// Define the menu items
const menuItems = [
  { id: 1, title: 'Burger', price: 10 },
  { id: 2, title: 'Pizza', price: 12 },
  { id: 3, title: 'Salad', price: 8 },
  // Add more items as needed
];

const App = () => {
  const [activePanel, setActivePanel] = useState('main');

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Restaurant Menu</PanelHeader>
        <Group header={<Header mode="secondary">Food Items</Header>}>
          {menuItems.map((item) => (
            <Cell
              key={item.id}
              onClick={() => setActivePanel(`item${item.id}`)}
              description={`${item.price}$`}
            >
              {item.title}
            </Cell>
          ))}
        </Group>
      </Panel>

      {menuItems.map((item) => (
        <Panel key={`item${item.id}`} id={`item${item.id}`}>
          <PanelHeader>{item.title}</PanelHeader>
          <Div>
            <Button size="xl" onClick={() => setActivePanel('main')}>
              Back to Menu
            </Button>
          </Div>
        </Panel>
      ))}
    </View>
  );
};

export default App;
