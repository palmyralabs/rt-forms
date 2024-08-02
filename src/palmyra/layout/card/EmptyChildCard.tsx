const EmptyChildCard = () => {
  return (
    <div>
      <div className='empty-child-card-container'>No Data Available</div>
    </div>
  )
}

const NoopEmptyChildCard = () => {
  return <></>
}

export { EmptyChildCard, NoopEmptyChildCard };