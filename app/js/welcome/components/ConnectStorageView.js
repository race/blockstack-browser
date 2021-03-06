import React, { Component, PropTypes } from 'react'

class ConnectStorageView extends Component {
  static propTypes = {
    connectDropbox: PropTypes.func.isRequired,
    connectGaiaHub: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      showAdvanced: false
    }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView(event) {
    event.preventDefault()
    this.setState({
      showAdvanced: !this.state.showAdvanced
    })
  }


  render() {
    const showAdvanced = this.state.showAdvanced
    return (
      <div>
        {!showAdvanced ?
          <div>
            <h3 className="modal-heading m-t-15 p-b-20">
              App data is stored in the storage provider of your choice
            </h3>
            <img
              role="presentation"
              src="/images/blockstack-logo-vertical.svg"
              className="m-b-20"
              style={{ width: '210px', display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
            />
            <div className="m-t-40 modal-body">
              <button
                className="btn btn-primary btn-block m-b-20"
                onClick={this.props.connectGaiaHub}
              >
                Use default storage
              </button>
              <a href="#" className="modal-body" onClick={this.toggleView}>
                Choose another storage provider
              </a>
            </div>
          </div>
        :
          <div>
            <h3 className="modal-heading m-t-15 p-b-20">
              Choose your storage provider
            </h3>
            <div className="m-t-40">
              <button
                className="btn btn-primary btn-block m-b-20"
                onClick={this.props.connectGaiaHub}
              >
                Use default storage
              </button>
              <button
                className="btn btn-primary btn-block m-b-20"
                onClick={this.props.connectDropbox}
              >
                Connect Dropbox
              </button>
              <button
                className="btn btn-primary btn-block m-b-20"
                disabled
                title="Coming soon!"
              >
                Connect IPFS
              </button>
              <button
                className="btn btn-primary btn-block m-b-20"
                disabled
                title="Coming soon!"
              >
                Connect self-hosted storage
              </button>
              <div className="modal-body">
                <a href="#" className="modal-body" onClick={this.toggleView}>
                  Back
                </a>
              </div>
            </div>
          </div>
      }
      </div>
   )
  }
 }


export default ConnectStorageView
