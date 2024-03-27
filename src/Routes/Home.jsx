import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()
  const { theme } = state;
  return (
    <main className="" style={{background:theme.background}} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.DentistList.map((item)=><Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home