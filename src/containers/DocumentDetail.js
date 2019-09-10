import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as Actions from '../actions';

class DocumentDetail extends React.Component {

    state = { data: null };

    componentDidMount() {
        this.updateDocumentState();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.updateDocumentState();
        }

        if (
            (this.props.document.data && !this.state.data) ||
            (this.props.document.data && this.state.data && this.props.document.data.id !== this.state.data.id)
        ) {
            this.setState({ data: this.props.document.data })
        }
    }

    handleChange = (event) => {
        this.setState({data: _.set({ ...this.state.data }, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)});
    }

    updateDocumentState = () => {
        const params = this.props.match.params;
        const { documentId, mode } = params;

        if (mode === 'new') {
            this.props.newDocument();
        } else {
            this.props.getDocument(documentId)
        }
    }

    render() {
        const props = this.props;
        const { data } = this.state;

        return (
            data && <div>
                <label>Document Id : {props.match.params.documentId}</label>
                <br />
                <label>Mode : {props.match.params.mode}</label>
                <br />
                <label>
                    Field1: <input name="field1" placeholder="field1" type="text" value={data.field1} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Field2: <input name="field2" placeholder="field2" type="text" value={data.field2} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Field3: <input name="field3" placeholder="field3" type="text" value={data.field3} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Field4: <input name="field4" placeholder="field4" type="text" value={data.field4} onChange={this.handleChange} />
                </label>
                <br />
                <button onClick={e => props.saveDocument(data)}>Save</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    document: state.document
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getDocument: Actions.getDocument,
        newDocument: Actions.newDocument,
        saveDocument: Actions.saveDocument
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetail);
