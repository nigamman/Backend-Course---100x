function Grid() {
  return (
    <div>
      <div className='grid grid-cols-3'> {/*6represent how many grids you want*/}
        <div className='bg-red-500'>H1</div>
        <div className='bg-yellow-500'>HI</div>
        <div className='bg-red-500'>HI</div>
        <div className='bg-yellow-500'>HI</div>
        <div className='bg-red-500'>HI</div>
        <div className='bg-yellow-500'>HI</div>
      </div>
      <br></br>
      {/*THIS WILL DIVIDE GRIDS INTO 4:4:2 RATIO*/}
      <div className="grid grid-cols-10">
        <div className='bg-blue-500 col-span-4'>hi</div>
        <div className='bg-green-500 col-span-4'>hi</div>
        <div className='bg-orange-500 col-span-2'>hi</div>
      </div>
    </div>
  );
}

export default Grid;