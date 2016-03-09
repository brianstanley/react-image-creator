var ImageCreator = React.createClass( {
      render: function() {
        return (
          <div className="imageCreator">
            <TextForm />
            <Slider   />
          </div>

        );
      }
});

var TextForm = React.createClass( {
    handleTextChange: function(e){
      this.setState({text: e.target.value})
    },
    render: function() {
      return (
        <form className="textForm">
          <textarea
            onChange={this.handleTextChange}
          />
        </form>
      );
    }
});

var Slider  = React.createClass ( {
  render: function() {
    return (
      <div>
        aca iria el slider
      </div>
    );
  }
});

ReactDOM.render(
  <ImageCreator />,
  document.getElementById('content')
);
