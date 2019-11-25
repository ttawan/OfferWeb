import React from 'react';

import Header from 'components/Header';
import CardItemDetail from 'components/CardItemDetail';

class Home extends React.Component {
  componentDidMount() {
    // Request all books
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    return (
      <main>
        <Header title="Detail" />
        <section>
          <div className="container">
            {this.renderDetailItem()}
          </div>
        </section>
      </main>
    )
  }

  renderDetailItem() {
    const {offer} = this.props;

    return offer.map((item, key) => (
      <CardItemDetail 
        src={item.image}
        id={item.id} 
        title={item.title}
        key={key}
      />
    ))
  }
}

export default Home;
