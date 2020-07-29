import React from 'react'

class App extends React.Component {
    render() {
        const helloWorld = 'Welcome to React'

        const yummyFoods = ['Cookies', 'Candy', 'Chocolate', 'Cake']

        const moreYummyFoods = [
            {
                id: 0,
                name: 'Cookies',
                recommended_drink: 'Milk'
            },
            { 
                id: 1,
                name: 'Candy',
                recommended_drink: 'None'
            },
            { 
                id: 2,
                name: 'Chocolate',
                recommended_drink: 'Coffee'
            },
            { 
                id: 3,
                name: 'Cake',
                recommended_drink: 'Tea'
            }
          ]
        

      return (
          <main>

            <h1>{helloWorld}</h1>

            <h2>Standard List</h2>
            <ul>
                <li>Cookies</li>
                <li>Candy</li>
                <li>Chocolate</li>
                <li>Cake</li>
            </ul>

            <h2>Indexed List</h2>
            <ul>
                <li>{yummyFoods[0]}</li>
                <li>{yummyFoods[1]}</li>
                <li>{yummyFoods[2]}</li>
                <li>{yummyFoods[3]}</li>
            </ul>

            <h2>Mapped List</h2>
            <ul>
                {yummyFoods.map(item => { 
                    return <li>{item}</li>;
                })}
            </ul>

            <h2>Object List</h2>
            <ul>
                {moreYummyFoods.map(item => { 
                    return <li key={item.id}>{item.name}</li>;
                })}
             </ul>

        </main>

      )
    }
  }

export default App