

const ItemDetail = ({ item }) => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="card mb-3 w-75" style={{"maxWidth": "1200px",}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item?.img} className="img-fluid rounded-start" alt="..."/>
          </div>
            <div className="col-md-8 h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h2 className="card-title">{item?.marca}</h2>
                  <h2 className="card-title fw-normal">${item?.precio}</h2>
                </div>
                <h5 className="card-title">{item?.modelo}</h5>
                <p className="card-text">{item?.descrip}</p>
                <p className="card-text text fst-italic">{item?.estilo}</p>

                <p className="card-text align-self-end"><small className="text-muted">Ecommerce Oficial © </small></p>
              </div>
            </div>
        </div>
      </div>
    </div>



  )
}

export default ItemDetail;