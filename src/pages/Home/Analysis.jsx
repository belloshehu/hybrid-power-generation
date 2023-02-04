import LineChart from '../../components/LineChart/LineChart'


const Analysis = () => {
  
  return (
    <section className='w-full flex flex-col gap-10 text-black'>
      <section>
        <div className='bg-primary p-1 my-2 flex gap-2 items-center rounded-md justify-center'>
          <span className='font-bold text-white '>Charts</span>
        </div>
        <LineChart />
      </section>
    </section>
  )
}

export default Analysis