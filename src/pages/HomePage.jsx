import React from 'react'
const Hero = React.lazy(()=> import('../Components/Hero'))
const Benifits = React.lazy(()=> import('../Components/Benifits'))
const Developers = React.lazy(()=> import('../Components/Developers'))
const Magic = React.lazy(()=> import('../Components/Magic'))
function HomePage() {
  return (
    <main className='homeSection '>
      <Hero/>
      <Benifits/>
      <Magic/>
      <Developers/>
    </main>
  )
}

export default HomePage