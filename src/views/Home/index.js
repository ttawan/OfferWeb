import React from 'react';

import Header from 'components/Header';
import CardItem from 'components/CardItem';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <main>
        <Header title="Home" />
        <section>
          <div className="container">
            {this.renderAllItems()}
          </div>
        </section>
      </main>
    )
  }

  renderAllItems() {
    const {allOffers} = this.props;

    return allOffers.map((item, key) => (
      <CardItem src={item.image} id={item.id} />
    ))
  }
}

export default Home;
