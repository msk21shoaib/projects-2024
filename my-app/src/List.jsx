function List(props) {
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id} >               
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);  /*giving key to make sure unique fruits only*/ 
    return(
        <>
            <h2 className="list-category" >{category}</h2>
            <ul className="list-item" >{listItems}</ul>
        </>
    )
    
}

List.propTypes = {
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id:PropTypes.number,
                                               name:PropTypes.string,
                                               calories:PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List
/* 

// const listItems = fruits.map(fruit => <li key={fruit.id} >               
    //                                             {fruit.name}: &nbsp;
    //                                             <b>{fruit.calories}</b></li>);      
// return(<ol>{listItems}</ol>)

**2nd**
    const fruits = [{id:1, name:"Apple", calories:95},
                    {id:2, name:"Orage", calories:45},
                    {id:3, name:"Banana", calories:105},
                    {id:4, name:"Coconut", calories:159},
                    {id:5, name:"Pineapple", calories:37}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name));                     //alphabetical sort
    // fruits.sort((a,b) => b.name.localeCompare(a.name));                     //reverse alphabetical sort
    fruits.sort((a,b) => a.calories - b.calories);                          //sort calory wise
    // fruits.sort((a,b) => b.calories - a.calories);                          //sort calory wise decreasing

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const hiCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id} >                
    //                                             {lowCalFruit.name}: &nbsp;
    //                                             <b>{lowCalFruit.calories}</b></li>);  /*giving key to make sure unique fruits only*/ 
    // return(<ol>{listItems}</ol>)
    
    // const listItems = hiCalFruits.map(hiCalFruit => <li key={hiCalFruit.id} >               
    //                                             {hiCalFruit.name}: &nbsp;
    //                                             <b>{hiCalFruit.calories}</b></li>);  /*giving key to make sure unique fruits only*/ 
    // return(<ol>{listItems}</ol>)
    
