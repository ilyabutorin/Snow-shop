import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ModalItem from "./components/ModalItem";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'OAKLEY Helmet',
          img: 'oakley-helmet.jpg',
          description: 'Athletic ski helmet for slopes and backcountry',
          category: 'equipment',
          price: '149.95'
        },
        {
          id: 2,
          title: 'SALOMON Goggles',
          img: 'salomon-goggles.jpg',
          description: 'Cylindrical lens, double-layer foam padding',
          category: 'equipment',
          price: '109.95'
        },
        {
          id: 3,
          title: 'GRIVEL Ski poles',
          img: 'grivel-poles.jpg',
          description: 'Aluminium, ergonomically shaped, 440g.',
          category: 'equipment',
          price: '99.95'
        },
        {
          id: 4,
          title: 'DEUTER Backpack',
          img: 'deuter-backpack.jpg',
          description: 'Water-repellent, hip belt pocket, helmet carrier, 70 x 32 x 24 cm',
          category: 'equipment',
          price: '219.95'
        },
        {
          id: 5,
          title: 'ATOMIC Redster S9 FIS',
          img: 'atomic-redster.jpg',
          description: 'World Cup-proven full-width Titanal laminate for stability, torsional rigidity, and edge grip',
          category: 'ski',
          price: '865.00'
        },
        {
          id: 6,
          title: 'ATOMIC Ski Boots',
          img: 'atomic-ski-boots.jpg',
          description: 'The Atomic Redster Club Sport 130 is a boot that works brilliantly for club races and piste skiing',
          category: 'ski',
          price: '494.00'
        },
        {
          id: 7,
          title: 'BURTON Snowboard',
          img: 'burton-snowboard.jpg',
          description: 'Offering a snappy suspension, camber distributes weight evenly over the entire length of the board for smooth, continuous edge control from tip to tail',
          category: 'snowboard',
          price: '869.00'
        },
        {
          id: 8,
          title: 'KEMPER Snowboard',
          img: 'kemper-snowboard.jpg',
          description: 'This model is a performance-oriented splitboard designed for adventures in the backcountry',
          category: 'snowboard',
          price: '899.95'
        },
        {
          id: 9,
          title: 'NITRO Boots',
          img: 'nitro-boots.jpg',
          description: 'The Nitro Droid QLS snowboarding boot is the first step in progression for kids looking for the response and technology, to help them progress every day',
          category: 'snowboard',
          price: '134.00'
        },
        {
          id: 10,
          title: 'BURTON Boots',
          img: 'burton-boots.jpg',
          description: 'The soft flex is forgiving and offers a comfortable ride, for a relaxed style',
          category: 'snowboard',
          price: '329.00'
        },
        {
          id: 11,
          title: 'KEMPER Bindings',
          img: 'kemper-bindings.jpg',
          description: 'With these Kemper bindings you can go for runs on both groomed snow, powder, park or pipes',
          category: 'snowboard',
          price: '239.95'
        },
        {
          id: 12,
          title: 'BURTON Bindings',
          img: 'burton-bindings.jpg',
          description: 'A legendary blend of comfort and all-terrain versatility updated for even lighter, more responsive performance',
          category: 'snowboard',
          price: '359.00'
        },
        {
          id: 13,
          title: 'TSL Snowshoes',
          img: 'tsl-snowshoes.jpg',
          description: 'With the Escape Easy Mountain snowshoes from TSL, you can get through the snow easily and retain your energy even on steep terrain',
          category: 'walking',
          price: '119.00'
        },
        {
          id: 14,
          title: 'SALEWA Snow spikes',
          img: 'salewa-snow-spikes.jpg',
          description: 'The durable, stainless steel Mountain Spike Crampon from Salewa offers the traction you need on packed snow and icy roads',
          category: 'walking',
          price: '63.95'
        },
        {
          id: 15,
          title: 'PETZL Head torch',
          img: 'petzl-actik-head-torch.jpg',
          description: 'The Actik headlamp from Petzl is ideal for outdoor activities such as mountaineering, trekking and trail running',
          category: 'equipment',
          price: '49.95'
        },
      ],
      modalItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items;
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.showModalItem = this.showModalItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items  showModalItem={this.showModalItem} items={this.state.currentItems} onAdd={this.addOrder} />

        {this.state.modalItem && <ModalItem showModalItem={this.showModalItem} onAdd={this.addOrder} item={this.state.fullItem}/>}
        
        <Footer />
      </div>
    );
  }

  showModalItem(item) {
    this.setState({fullItem: item})
    this.setState({modalItem: !this.state.modalItem})
  }

  chooseCategory(category) {
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    });

    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
    };
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
