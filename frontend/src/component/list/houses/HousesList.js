import React from 'react';
import './housesList.scss';
import Houses from './Houses';
import {allHouses} from '../data';

export default class HousesList extends React.Component {
    state ={
        houses: allHouses,
        filteredHouses: "",
        currentOrder: "default"
    }

    removeHouse = id => {
        const { houses } = this.state;
        const remainingHouses = houses.filter( house => house.id !== id );
        this.setState({houses:remainingHouses});
    }

    searchHouses = event => {
        const resetHouses = allHouses;
        let { houses, currentOrder } = this.state;
        const remainingHouses = event.target.value.length > 0 
            ? houses.filter( house =>
                house.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
            : (resetHouses, currentOrder= "default");
        this.setState({ 
            houses: remainingHouses,
            filteredHouses: event.target.value,
            currentOrder: currentOrder
        });

    }

    descendingNameComparison = (current, next) => {
        if( current.name < next.name ){
            return 1;
        }
        if( current.name > next.name ){
            return -1;
        }
        return 0;
    }

    ascendingNameComparison = (current, next) => {
        if( current.name < next.name ){
            return -1;
        }
        if( current.name > next.name ){
            return 1;
        }
        return 0;
    }

    sortName(houses){
        let { currentOrder } = this.state;
        let reorderedHouses = [];
        let newCurrentOrder;
        Object.assign( reorderedHouses, houses);
        if ( currentOrder !== 'ascending' ){
            reorderedHouses.sort(this.ascendingNameComparison);
            newCurrentOrder = 'ascending';
        } else {
            reorderedHouses.sort(this.descendingNameComparison);
            newCurrentOrder = 'descending'
        }
        this.setState({ houses: reorderedHouses, currentOrder: newCurrentOrder });
        return;
    }


    render (){
        const {houses} = this.state;
        return (
            <section className="housesList">
                <img src={"./sort.svg"} alt="action" onClick={() => this.sortName(houses) } className='sortarrows pull-right'/>
                <img src={"./search.svg"} alt="search" className='searchIcon pull-right'/>
                <input
                    className="search"
                    type="text"
                    name="houseFilter"
                    placeholder="Search House Name ..."
                    value={this.state.filteredHouses}
                    onChange={this.searchHouses}
                />
                {
                    houses.map(house => ( 
                        <Houses 
                            key={house.id}
                            house={house}
                            removeHouse={this.removeHouse}
                        />
                    ))
                }
            </section>
        );
  }
}