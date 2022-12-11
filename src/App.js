import Draggable from 'react-draggable';

function App() {
  return (
    <div className="App">

      <div className="row w-50 mx-auto mt-2">
        <div className="col-6">
          <Draggable>
            <div className='card'>
              <div className="card-body">Move anywhere</div>
            </div>
          </Draggable>
        </div>
        <div className="col-6">
          <Draggable axis='x'>
            <div className='card'>
              <div className="card-body">Dragged horizontally</div>
            </div>
          </Draggable>
        </div>
      </div>
      <div className="row w-50 mx-auto mt-2">
        <div className="col-6">
          <Draggable handle="#handle">
            <div className='card'>
              <span className="btn btn-success" id="handle">Drag here</span>
              <div className="card-body">Cannot drag here</div>
            </div>
          </Draggable>
        </div>
        <div className="col-6">
          <Draggable handle="#handle">
            <div className='card'>
              <span className="btn btn-danger">Cannot Drag here</span>
              <div className="card-body" id="handle">Drag here</div>
            </div>
          </Draggable>
        </div>
      </div>


    </div>
  );
}

export default App;
