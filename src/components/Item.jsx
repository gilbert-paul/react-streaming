const Item = ({elem})=>{
return (
  <>
  {elem.images.map((url) => {
    return (
      <div key={url}>
        <img src={url} alt="Movies Pictures" />
      </div>
    );
  })}
  </>
)
}

export default Item